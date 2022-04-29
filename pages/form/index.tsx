import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Divider, Form, Icon, Label, Segment } from "semantic-ui-react";
import { OPEN_MODAL } from "../../reducers/alertReducer";
import Alert from "../../components/Alert";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import dayjs from "dayjs";
import NoneImage from "../../components/NoneImage";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    startDate: dayjs().format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
    desc: "",
    blockChain: "",
    homeUrl: "",
    discodeUrl: "",
    twitterUrl: "",
    price: "",
  });
  const [thumbnail, setThumbnail] = useState<File>();
  const [src, setSrc] = useState<string>();
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onApply = (e: any, picker: any) => {
    setFormData({
      ...formData,
      startDate: picker.startDate.format("YYYY-MM-DD"),
      endDate: picker.endDate.format("YYYY-MM-DD"),
    });
  };
  const trimJSON = (object: any) => {
    if (object) {
      return JSON.stringify(object).replace(/"\s+|\s+"/g, '"');
    }

    return object;
  };

  return (
    <>
      <Segment raised color="blue">
        <Label color="blue" ribbon>
          <h3>프로젝트 제보하기</h3>
        </Label>
        <Form
          style={{ padding: "40px 40px", width: "80%", margin: "0 auto" }}
          onSubmit={(e) => {
            const form = new FormData();
            form.append("data", trimJSON(formData));
            if (thumbnail) {
              form.append("files.thumbnail", thumbnail);
            }

            axios
              .post(
                `http://ec2-15-165-0-175.ap-northeast-2.compute.amazonaws.com:1337/api/projects`,
                form,
                { headers: { "content-type": "multipart/form-data" } }
              )
              .then((res) => {
                if (res.status === 200) {
                  dispatch({
                    type: OPEN_MODAL,
                    payload: { message: "제출되었습니다." },
                  });
                  location.href = "/";
                } else {
                  //
                }
              });
          }}
        >
          <Form.Field required>
            <label style={{ fontSize: "medium" }}>프로젝트 명</label>
            <Form.Input required name="name" onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label style={{ fontSize: "medium" }}>썸네일</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              style={{ width: "70%" }}
              onChange={(e) => {
                const fileList = e?.target?.files;
                if (!fileList || fileList.length === 0) return;

                setThumbnail(fileList[0]);
                const reader = new FileReader();
                reader.readAsDataURL(fileList[0]);
                reader.onload = () => {
                  if (reader.result) setSrc(reader?.result?.toString());
                };
              }}
            />
            <div
              style={{
                float: "right",
                width: "256px",
                height: "150px",
                backgroundColor: "#f7f7f7",
                border: "1px solid #ededed",
                marginBottom: "3px",
              }}
            >
              {thumbnail ? (
                <img src={src} width="256" height="150" />
              ) : (
                <NoneImage />
              )}
            </div>
          </Form.Field>
          <Form.Field required>
            <label style={{ fontSize: "medium" }}>민팅 기간</label>
            <DateRangePicker
              initialSettings={{
                applyButtonClasses: "btn-gray",
                startDate: formData.startDate,
                endDate: formData.endDate,
                autoUpdateInput: false,
                // autoApply: false,
                showDropdowns: true,
                locale: {
                  separator: " ~ ",
                  firstDay: 1,
                  format: "YYYY-MM-DD",
                },
              }}
              onApply={onApply}
            >
              <input
                type="text"
                readOnly={true}
                value={formData?.startDate + "~" + formData?.endDate}
              />
            </DateRangePicker>
          </Form.Field>
          <Form.Field required>
            <label style={{ fontSize: "medium" }}>민팅 가격</label>
            <Form.Input
              required
              name="price"
              placeholder="코인 단위까지 입력해주세요."
              icon="bitcoin"
              iconPosition="left"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ fontSize: "medium" }}>블록체인</label>
            <Form.Input name="blockChain" onChange={handleChange} />
          </Form.Field>
          <Form.Field required>
            <label style={{ fontSize: "medium" }}>상세 내용</label>
            <Form.TextArea
              required
              name="desc"
              placeholder="프로젝트 내용 및 민팅 안내사항에 대해 자세히 작성해주세요."
              style={{ minHeight: 130 }}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label style={{ fontSize: "medium" }}>홈페이지 주소</label>
            <Form.Input
              required
              icon="home"
              iconPosition="left"
              name="homeUrl"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ fontSize: "medium" }}>디스코드 주소</label>
            <Form.Input
              icon="discord"
              iconPosition="left"
              name="discodeUrl"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label style={{ fontSize: "medium" }}>트위터 주소</label>
            <Form.Input
              icon="twitter"
              iconPosition="left"
              name="twitterUtl"
              onChange={handleChange}
            />
          </Form.Field>
          <Divider hidden />
          <Form.Field>
            <Icon name="checkmark" color="blue" />
            작성한 내용이 tomorrow NFT의 캘린더에 등록되는 것에 동의합니다.
          </Form.Field>
          <Button type="submit" primary>
            제출
          </Button>
        </Form>
      </Segment>
      <Alert />
    </>
  );
};

export default ProjectForm;
