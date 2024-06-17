import React, { useState } from 'react';
import { Input, Button, List, Typography } from 'antd';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
      <Input
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={handleAdd}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleAdd} block>
        Add Task
      </Button>
      <List
        style={{ marginTop: '20px' }}
        bordered
        dataSource={items}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => handleDelete(index)}>
                Delete
              </Button>,
            ]}
          >
            <Typography.Text>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
