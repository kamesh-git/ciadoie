import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { Alert, Button, Form } from 'react-bootstrap';
import { addDoc, collection, deleteDoc, getDocs, onSnapshot } from 'firebase/firestore';
import useFirebase from '../../assests/useFirebase';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);


// Finish!
const Notification = () => {
  const { db } = useFirebase()
  const [newsData, setNewsData] = useState({ html: '', text: '' })
  const [title, setTitle] = useState('')
  const [notifyDocs, setNotifyDocs] = useState([])

  useEffect(() => {
    const listener = onSnapshot(collection(db, 'notification'), snapshot => setNotifyDocs(snapshot.docs))

    return () => listener();
  }, [])

  function handleEditorChange({ html, text }) {
    console.log(html)
    setNewsData({ html: html, text: text })
  }

  const handlePost = () => {
    if(title.trim() === '') return alert('No title');
    else if(newsData.html.trim() === '') return alert('No Body');
    if (window.confirm('Confirm to post the content...')) {
      addDoc(collection(db, 'notification'), { html: newsData.html, title: title }).then(data => alert('succesfully posted'));
    }
    else return;
  }
  const handleDelete = (ref) => {
    if(window.confirm('Do you really want to delete this notification? \n(this action can\'t be undone)')){
      deleteDoc(ref).then(alert("Deleted successfully"));
    }
  }
  return (
    <div className='ps-3 pe-3'>
      <Form.Control  value={title} onChange={(e) => setTitle(e.target.value)} className='mb-5' type='text' title='Title' placeholder='Title' />
      <MdEditor value={newsData.text} renderHTML={text => mdParser.render(text)} style={{ height: '500px' }} onChange={handleEditorChange} />
      <Button onClick={handlePost} variant='danger' className="m-2">Post</Button>
      <div>
        <hr />
        <h5>Posted Notifications</h5>
        {notifyDocs.map(item => {
          // console.log(item.ref);
          return <Alert className='d-flex justify-content-between' variant='info'>
            <p>{item.data().title}</p>
            <Button variant='danger' onClick={() => handleDelete(item.ref)}>Delete</Button>
          </Alert>
        })}
      </div>


    </div>
  );
};

export default Notification