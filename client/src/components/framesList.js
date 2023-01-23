import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Frame = (props) => (
    <tr>
      <td>{props.frame.user}</td>
      <td>{props.frame.time}</td>
      <td>{props.frame.emotion}</td>
      <td>
        <Link className="btn btn-link" to={`/edit/${props.frame._id}`}>Edit</Link> |
        <button className="btn btn-link"
          onClick={() => {
            props.deleteRecord(props.frame._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
   );
    
   export default function FrameList() {
    const [frames, setFrames] = useState([]);
    
    // This method fetches the Frames from the database.
    useEffect(() => {
      async function getFrames() {
        const response = await fetch(`http://localhost:4000/frame/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const frames = await response.json();
        setFrames(frames);
      }
    
      getFrames();
    
      return;
    }, [frames.length]);
    
    // This method will delete a frame
    async function deleteFrame(id) {
      await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
      });
    
      const newFrames = frames.filter((el) => el._id !== id);
      setFrames(newFrames);
    }
    
    // This method will map out the records on the table
    function frameList() {
      return frames.map((frame) => {
        return (
          <Frame
            frame={frame}
            deleteFrame={() => deleteFrame(frame._id)}
            key={frame._id}
          />
        );
      });
    }
    
    // This following section will display the table with the frames of individuals.
    return (
      <div>
        <h3>Frame List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>User</th>
              <th>Time</th>
              <th>Emotion</th>
            </tr>
          </thead>
          <tbody>{frameList()}</tbody>
        </table>
      </div>
    );
   }