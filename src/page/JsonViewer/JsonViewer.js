import React from "react";
import Modal from "../../components/Modal/Modal";
import Sidebar from "../../components/Sidebar/Sidebar";

const isString = (val) => {
  return typeof val === "string";
};
const isNumber = (val) => {
  return typeof val === "number";
};
const isBoolean = (val) => {
  return typeof val === "boolean";
};
const isUndefined = (val) => {
  return typeof val === "undefined";
};
const isArray = (val) => {
  return toString.call(val) === "[object Array]";
};
const isObject = (val) => {
  return toString.call(val) === "[object Object]";
};
const isNull = (val) => {
  return toString.call(val) === "[object Null]";
};
const getTypeClass = (val) => {
  if (typeof val === "[object Null]") {
    return "Null";
  } else if (typeof val === "[object Object]") {
    return "Obj";
  } else if (typeof val === "[object Array]") {
    return "Obj";
  }
  return (typeof val).charAt(0).toUpperCase() + (typeof val).slice(1);
};

function createChildrenItem(key, value, children, type) {
  if (type === "object") {
    return (
      <div key={key}>
        <span>
          <span className="">{}</span>
          {key}
          {" { "}
          <span className="jv-Number">{Object.keys(value).length}</span>
          {" }"}
        </span>
        <div className="jv-folder">
          {isArray(children) ? children.map((item) => item) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div key={key}>
        <span>
          {key}
          {" [ "}
          <span className="jv-Number">{Object.keys(value).length}</span>
          {" ]"}
        </span>
        <div className="jv-folder">
          {isArray(children) ? children.map((item) => item) : null}
        </div>
      </div>
    );
  }
}

const handleChildren = (key = null, value) => {
  let html = [];

  if (isObject(value)) {
    for (let item in value) {
      let _key = item,
        _val = value[item];

      html.push(handleItem(_key, _val));
    }
    return createChildrenItem(key, value, html, "object");
  } else {
    for (let i = 0; i < value.length; i++) {
      html.push(handleItem(i, value[i]));
    }
    return createChildrenItem(key, value, html, "array");
  }
};

const createItem = (key, value) => {
  if (isString(value)) {
    return (
      <span key={key}>
        {key}
        {": "}
        <span className={"jv-" + getTypeClass(value)}>{`"${value}"`}</span>
      </span>
    );
  } else {
    return (
      <span key={key}>
        {key}
        {": "}
        <span className={"jv-" + getTypeClass(value)}>{`${value}`}</span>
      </span>
    );
  }
};

const handleItem = (key, value) => {
  if (isObject(value)) {
    return handleChildren(key, value);
  } else if (isArray(value)) {
    return handleChildren(key, value);
  }

  return createItem(key, value);
};

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

function JsonViewer({ json, loginURL }) {
  const [viewer, setViewer] = React.useState([]);
  const [url, setUrl] = React.useState("");
  const [rawJson, setRawJson] = React.useState("");
  const [visable, setVisable] = React.useState(true);

  React.useEffect(() => {
    if (json !== "") {
      for (let item in json) {
        let key = item,
          value = json[item];
        setViewer((x) => [...x, handleItem(key, value)]);
      }
    }
  }, []);

  const getJson = () => {
    if (validateUrl(url)) {
      fetch(url)
        .then((req) => req.json())
        .then((data) => {
          for (let item in data) {
            let key = item,
              value = data[item];
            setViewer((x) => [...x, handleItem(key, value)]);
          }
          setVisable(false);
        });
    } else if (rawJson !== "") {
      for (let item in JSON.parse(rawJson)) {
        let key = item,
          value = JSON.parse(rawJson)[item];
        setViewer((x) => [...x, handleItem(key, value)]);
      }
      setVisable(false);
    }
  };

  return (
    <div className="page">
      <Sidebar loginURL={loginURL} />

      {!visable ? (
        <div className="jv-con">{viewer}</div>
      ) : (
        <Modal
          visable={visable}
          title={"Json viewer"}
          content={
            <>
              <input
                type="text"
                placeholder="url"
                onChange={(e) => setUrl(e.target.value)}
              />
              <textarea
                placeholder="json"
                onChange={(e) => setRawJson(e.target.value)}
              ></textarea>
              <button onClick={getJson}>Look</button>
            </>
          }
        />
      )}
    </div>
  );
}

export default JsonViewer;
