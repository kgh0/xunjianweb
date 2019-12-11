import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Select, Row, Col, } from 'antd';
import xtgl from "./xtgl.less"

const { Option } = Select;
const FormItem = Form.Item;

class GroupManagerUI extends React.Component {


  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    // this.setState({
    //   formValues: {},
    // });
    // dispatch({
    //   type: 'listAndtableList/fetch',
    //   payload: {},
    // });
  };

  renderQuery() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={xtgl.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
                      </Button>
              <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
                      </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );

  }

  renderOpBtn() {
    return (
      <div>
         <Button >详情</Button>
         <Button icon="add">添加</Button>
         <Button >更改</Button>
         <Button >删除</Button>
         <Button><Icon type="message" style={{ fontSize: '16px', color: '#08c' }} />人员分配</Button>
      </div>
    );
  }

  renderTable(){
    return (
      <div></div>
    );
  }




  render() {
    return (<div>
      <div> {this.renderQuery()} </div>
      <div>{this.renderOpBtn()}</div>
      <div> GroupManagerUI</div>
    </div>);
  }
}

const GroupManagerForm = Form.create({ name: 'horizontal_login' })(GroupManagerUI);


const mapStateToProps = (state, ownProps) => {
  debugger;
  // const { isFetching, data, error } = state.main;
  return {};
}


const mapDispatchToProps = dispatch => ({
  todo: (username) => {
    debugger;
    return "";
  }
})

const temp = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupManagerForm);

export default temp;
