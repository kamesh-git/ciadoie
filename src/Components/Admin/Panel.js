import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import useFirebase from '../../assests/useFirebase'

const Panel = () => {

  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const { db } = useFirebase()

  async function startfunc() {
    const q = query(collection(db, 'ciawardreg'), orderBy('timestamp', 'asc'));
    const docs = await getDocs(q)
    const docTemp = []
    docs.forEach(doc => {
      docTemp.push(doc.data())
    })
    console.log(docTemp)
    setData(docTemp)
  }
  function ExportData(incdata, xlname) {
    const filename = `${xlname}.xlsx`;
    const XLSX = window.XLSX
    var ws = XLSX.utils.json_to_sheet(incdata);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");
    XLSX.writeFile(wb, filename);
  }

  useEffect(() => {
    startfunc()
    return () => { }
  }, [])


  return (
    <div style={{ overflow: 'scroll' }}>
      {
        <>
          <Container>
            <h1>Registered Entries</h1>
            <Table style={{width:'max-content'}} striped hover bordered  id='registeredEntries'>
              <thead>
                <th >S.no</th>
                {[
                  "Organisation Name",
                  "Contact Name",
                  "Type of Org",
                  "Contact Number",
                  "Address",
                  "State",
                  "Email",
                  "Category",
                  "Needed Accommodation",
                  "Operator Level",
                  "Management Level",
                  "27/03/2024",
                  "28/03/2024",
                  "Timestamp",
                ].map((item, index) => (<th >{item}</th>))
                }

              </thead>
              <tbody>
                {
                  
                  data.map((item, index) => (
                    <tr>
                      <td > {index + 1} </td>
                      <td > {item.organisationName} </td>
                      <td > {item.contactName} </td>
                      <td > {item.typeOrg} </td>
                      <td > {item.contactNumber} </td>
                      <td > {item.address} </td>
                      <td > {item.state} </td>
                      <td > {item.email} </td>
                      <td > {item.category} </td>
                      <td > {item.neededAccommodation} </td>
                      <td > {item["operatorLevel"] ? "true" : "false"} </td>
                      <td > {item["managementLevel"] ? "true" : "false"} </td>
                      <td > {item["27/03/2024"] ? "true" : "false"} </td>
                      <td > {item["28/03/2024"] ? "true" : "false"}   </td>
                      <td > {item.timestamp.toDate().toString()} </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Button onClick={() => ExportData(data, "Paper Presentation")}>Excel</Button>
          </Container>
        </>
      }
    </div>
  )
}

export default Panel