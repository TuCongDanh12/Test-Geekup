import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { userservice } from "../../services/user.service";
import { useAuth } from "../../hooks";
function SelectUser() {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [listUser, setListUser] = useState([]);
  const { setUserId } = useAuth();
  const getListUser = async () => {
    try {
      const res = await userservice.getUser();
      if (res.data) {
        setListUser(res.data);
        const listName = res.data.map((user) => user.name);
        setOptions(
          listName.map((name) => ({
            value: name,
            label: name,
          }))
        );
        setSelectedValue(listName[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getListUser();
  }, []);

  const handleChange = (value) => {
    setSelectedValue(value);
    const selectedUser = listUser.find((user) => user.name === value);

    if (selectedUser) {
      const selectedId = selectedUser.id;
      //   console.log(selectedId);
      setUserId(selectedId);
    }
  };

  return (
    <div>
      {/* {console.log(listUser)} */}
      <Select
        className="!w-[150px]"
        value={selectedValue}
        style={{ width: 120 }}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

export default SelectUser;
