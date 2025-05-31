import { useState } from "react";
import data from "./data";
import { FileTree } from "./FileTree";

export default function App() {
  const [tree, setTree] = useState(data);

  function addNode(parentId, name, isFolder) {
    const newNode = {
      id: Date.now().toString(),
      name,
      isFolder,
      children: isFolder ? [] : null,
    };

    const add = (nodes) => {
      return nodes.map((node) => {
        if (node.id === parentId && node.isFolder) {
          return {
            ...node,
            children: [...(node.children ?? []), newNode],
          };
        } else if (node.isFolder) {
          return {
            ...node,
            children: add(node.children),
          };
        }
        return node;
      });
    };

    setTree(add(tree));
  }

  function updateNode(id, newName) {
    const update = (nodes) => {
      return nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            name: newName,
          };
        } else if (node.isFolder) {
          return {
            ...node,
            children: update(node.children),
          };
        }
        return node;
      });
    };

    setTree(update(tree));
  }

  function deleteNode(id) {
    const remove = (nodes) => {
      return nodes
        .map((node) => {
          if (node.id === id) {
            return null;
          } else if (node.isFolder) {
            return {
              ...node,
              children: remove(node.children),
            };
          }
          return node;
        })
        .filter(Boolean);
    };
    setTree(remove(tree));
  }

  return (
    <>
      <h2>File Explorer </h2>

      {tree.map((node) => (
        <FileTree
          key={node.id}
          node={node}
          addNode={addNode}
          updateNode={updateNode}
          deleteNode={deleteNode}
        />
      ))}
    </>
  );
}
