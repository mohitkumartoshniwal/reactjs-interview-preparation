import { useState, useRef, useEffect } from "react";

export const FileTree = ({ node, addNode, updateNode, deleteNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [newName, setNewName] = useState("");
  const [addMode, setAddMode] = useState(null);
  const addInputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (addMode) {
      addInputRef.current.focus();
    }
  }, [addMode]);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  function handleRename(id) {
    const trimmedName = editName.trim();
    if (trimmedName) {
      updateNode(id, trimmedName);
    }
    setIsEditing(false);
  }

  function handleAdd() {
    const trimmedName = newName.trim();
    if (trimmedName) {
      addNode(node.id, trimmedName, addMode === "folder");
    }
    setNewName("");
    setAddMode(null);
  }

  return (
    <div className="node">
      <div>
        <span
          onClick={() => {
            if (node.isFolder) {
              setIsExpanded((prev) => !prev);
            }
          }}
        >
          {node.isFolder ? "📁" : "🗒️"}
        </span>
        {isEditing ? (
          <input
            type="text"
            ref={editInputRef}
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={() => handleRename(node.id)}
          />
        ) : (
          <span
            onClick={() => {
              if (node.isFolder) {
                setIsExpanded((prev) => !prev);
              }
            }}
          >
            {node.name}{" "}
          </span>
        )}

        <button
          onClick={() => {
            setIsEditing(true);
            setEditName(node.name);
          }}
        >
          ✏️
        </button>
        {node.isFolder && (
          <>
            <button
              onClick={() => {
                setAddMode("folder");
                setIsExpanded(true);
              }}
            >
              📁
            </button>
            <button
              onClick={() => {
                setAddMode("file");
                setIsExpanded(true);
              }}
            >
              🗒️
            </button>
          </>
        )}
        <button onClick={() => deleteNode(node.id)}> ❌ </button>
      </div>

      {isExpanded && node.children && (
        <>
          {node.children.map((node) => (
            <FileTree
              key={node.id}
              node={node}
              addNode={addNode}
              updateNode={updateNode}
              deleteNode={deleteNode}
            />
          ))}
          {addMode && (
            <div className="left">
              <span> {addMode === "folder" ? "📁" : "🗒️"} </span>
              <input
                ref={addInputRef}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={handleAdd}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
