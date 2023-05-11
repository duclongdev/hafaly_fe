import React, { useEffect, startTransition, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import joinFamilyApi from "../../api/joinFamily";
import { Avatar, Button, List, Skeleton } from "antd";
import styles from "./JoinRequest.module.scss";
const RequestJoinFamily = () => {
  const auth = useAuth();
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [list, setList] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    joinFamilyApi
      .getAllRequest()
      .then((res) => {
        setInitLoading(false);
        setData(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        setLoading(true);
        setInitLoading(false);
        setData("");
        setList("");
      });
  }, []);
  console.log(list);

  function handleAcceptRequest(requestId) {
    joinFamilyApi
      .accept(requestId)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleRefuseRequest(requestId) {}

  return (
    <List
      className={styles.list}
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={
            item.statusRequest === "ACCEPT" ? (
              <></>
            ) : (
              [
                <Button
                  onClick={() => {
                    handleAcceptRequest(item.requestId);
                  }}
                >
                  Accept
                </Button>,
                <Button
                  danger
                  onClick={() => {
                    handleRefuseRequest(item.requestId);
                  }}
                >
                  Refuse
                </Button>,
              ]
            )
          }
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://randomuser.me/api/portraits/men/0.jpg" />
              }
              title={item.user?.email}
              description={item.message}
            />
            <div>{item.statusRequest}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default RequestJoinFamily;
