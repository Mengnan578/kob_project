import React, { useState } from "react";
import { Input, Button, List, Typography } from "antd";

export default function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);

  const add_item = (e) => {
    setItem([...item, value]);
    setValue("");
  };

  const delet_item = (index) => setItem(item.filter((v, i) => i !== index));
  return (
    <div>
      <div>
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="添加todo"
        />
      </div>
      <div>
        <Button onClick={add_item} block>
          添加任务
        </Button>
      </div>
      <div>
        <List
          dataSource={item}
          style={{ marginTop: "20px" }}
          bordered
          renderItem={(iaaaem, index) => (
            <List.Item
              actions={[
                <Button type="link" onClick={() => delet_item(index)}>
                  删除
                </Button>,
              ]}
            >
              <Typography.Text>{iaaaem}</Typography.Text>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
