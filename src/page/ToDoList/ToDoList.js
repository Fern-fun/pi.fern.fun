import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import uuid from "react-uuid";
import Modal from "../../components/Modal/Modal";

function ToDoList() {
  const [toDoList, setTodoList] = useState([]);

  const [inputText, setInputText] = useState("");
  const [email, setEmail] = useState("");

  const [displayEmailPopUp, setDisplayEmailPopUp] = useState(false);
  const [autosave, setAutosave] = useState(0);

  //! Auto save & load to cloud
  useEffect(() => {
    const todoData = localStorage.getItem("todoList");
    if (todoData) {
      setTodoList(JSON.parse(todoData));
    }
    const emial = localStorage.getItem("email");
    if (emial) {
      setEmail(emial);
    } else {
      setDisplayEmailPopUp(true);
    }
  }, []);

  //! Auto load from cloud
  useEffect(() => {
    //!Check user is in database
    // console.log("Auto Load");
    fetch(`https://api.fern.fun/pi/todo/get/${localStorage.getItem("email")}`)
      .then((res) => res.json())
      .then((data) => {
        //? console.log(data);
        setTodoList(JSON.parse(data[0].todo));
        localStorage.setItem("todoList", data[0].todo);
      })
      .catch((err) => {
        //? console.log(err);
      });
  }, []);

  //? Add bnt function
  const tileAddHandler = (e) => {
    e.preventDefault();
    if (inputText.length <= 0) return;

    const newTile = {
      id: uuid(),
      title: inputText,
    };
    setTodoList([...toDoList, newTile]);
    setInputText("");
    localStorage.setItem("todoList", JSON.stringify([...toDoList, newTile]));

    //! Auto save to cloud
    // console.log("Auto Save");
    const postReqData = {
      email: email,
      todo: localStorage.getItem("todoList"),
    };

    //!Check user is in database
    fetch(`https://api.fern.fun/pi/todo/get/${email}`)
      .then((res) => res.json())
      .then((data) => {
        //!IF user is't in database add user
        if (data.length === 0) {
          fetch("https://api.fern.fun/pi/todo/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          })
            .then((res) => res.json())
            .then((data) => {
              //? console.log(data);
            })
            .catch((err) => {
              //? console.log(err);
            });
        }
        //!If user is in database, update todo list
        else {
          fetch("https://api.fern.fun/pi/todo/update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          })
            .then((res) => res.json())
            .then((data) => {
              //? console.log(data);
            })
            .catch((err) => {
              //? console.log(err);
            });
        }
      });
    setAutosave(autosave + 1);
  };

  //? Delete bnt function
  const tileDeleteHandler = (e) => {
    e.preventDefault();
    setTodoList(
      toDoList.filter((tile) => tile.id !== e.target.attributes[1].value)
    );
    localStorage.setItem(
      "todoList",
      JSON.stringify(
        toDoList.filter((tile) => tile.id !== e.target.attributes[1].value)
      )
    );
    //! Auto save to cloud
    // console.log("Auto Save");
    const postReqData = {
      email: email,
      todo: JSON.stringify(
        toDoList.filter((tile) => tile.id !== e.target.attributes[1].value)
      ),
    };

    //!Check user is in database
    fetch(`https://api.fern.fun/pi/todo/get/${email}`)
      .then((res) => res.json())
      .then((data) => {
        //!IF user is't in database add user
        if (data.length === 0) {
          fetch("https://api.fern.fun/pi/todo/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          })
            .then((res) => res.json())
            .then((data) => {
              //? console.log(data);
            })
            .catch((err) => {
              //? console.log(err);
            });
        }
        //!If user is in database, update todo list
        else {
          fetch("https://api.fern.fun/pi/todo/update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          })
            .then((res) => res.json())
            .then((data) => {
              //? console.log(data);
            })
            .catch((err) => {
              //? console.log(err);
            });
        }
      });
    setAutosave(autosave + 1);
  };

  //? Edit bnt function
  const emailSaveHandler = (e) => {
    e.preventDefault();
    setDisplayEmailPopUp(false);
    localStorage.setItem("email", email);
  };

  //? Save bnt function
  const todoListSaveHandler = (e) => {
    const postReqData = { email: email, todo: JSON.stringify(toDoList) };

    //!Check user is in database
    fetch(`https://api.fern.fun/pi/todo/get/${email}`)
      .then((res) => res.json())
      .then((data) => {
        //!IF user is't in database add user
        if (data.length === 0) {
          fetch("https://api.fern.fun/pi/todo/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          })
            .then((res) => res.json())
            .then((data) => {
              //? console.log(data);
            })
            .catch((err) => {
              //? console.log(err);
            });
        }
        //!If user is in database, update todo list
        else {
          fetch("https://api.fern.fun/pi/todo/update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          })
            .then((res) => res.json())
            .then((data) => {
              //? console.log(data);
            })
            .catch((err) => {
              //? console.log(err);
            });
        }
      });
  };

  //? Load bnt function
  const todoListLoadHandler = (e) => {
    e.preventDefault();
    //!Check user is in database
    fetch(`https://api.fern.fun/pi/todo/get/${email}`)
      .then((res) => res.json())
      .then((data) => {
        //? console.log(data);
        setTodoList(JSON.parse(data[0].todo));
        localStorage.setItem("todoList", data[0].todo);
      })
      .catch((err) => {
        //? console.log(err);
      });
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="to-do-panel">
        <Modal
          visable={displayEmailPopUp}
          title={<span>Email use to save your todo list to our cloud</span>}
          content={
            <>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={emailSaveHandler}>Accept</button>
            </>
          }
        />
        <div className="to-do-first-tile">
          <input
            type="text"
            placeholder="Add a task"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <img src="/img/add.svg" onClick={tileAddHandler} alt="add" />
        </div>

        <div className="to-do">
          {toDoList.map((tile) => (
            <div key={tile.id}>
              <span>{tile.title}</span>
              <img
                src="/img/delete.svg"
                uuid={tile.id}
                alt="trash"
                onClick={tileDeleteHandler}
              />
            </div>
          ))}
        </div>

        <div className="to-do-bnt">
          <button className="bnt bnt-green" onClick={todoListSaveHandler}>
            Save
          </button>
          <button className="bnt bnt-blue" onClick={todoListLoadHandler}>
            Load
          </button>
          <button
            className="bnt bnt-green"
            onClick={(e) => {
              localStorage.removeItem("email");
              setDisplayEmailPopUp(true);
            }}
          >
            Change Email
          </button>
          {/* <button className="bnt bnt-red">Export</button>
          <button className="bnt bnt-green">Import</button> */}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
