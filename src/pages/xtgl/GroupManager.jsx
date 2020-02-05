import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Select, Row, Col, Table } from 'antd';
import  "./xtgl.less";
import { StopSvg, logoSvg } from '../../images/svgicon.js';
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
        {/* <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col> */}
        <FormItem label="规则名称">
          {getFieldDecorator('name')(<Input placeholder="请输入" />)}
        </FormItem>

        <FormItem label="使用状态">
          {getFieldDecorator('status')(
            <Select placeholder="请选择" style={{ minWidth: "100px" }} >
              <Option value="0">关闭</Option>
              <Option value="1">运行中</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            查询
                      </Button>
          <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
            重置
                      </Button>
        </FormItem>
        {/* </Col>
        </Row> */}
      </Form>
    );

  }

  renderOpBtn() {
    return (
      <div className="divbtns" >
        <Button ><Icon component={StopSvg} />详情</Button>
        <Button ><Icon component={StopSvg} />添加</Button>
        <Button ><Icon component={logoSvg} />更改</Button>
        <Button ><Icon component={logoSvg} />删除</Button>
        <Button ><Icon component={logoSvg} />人员分配</Button>
      </div>
    );
  }

  renderTable() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];



    return (
      <Table dataSource={dataSource} columns={columns} size="small" />
    );
  }




  render() {
    return (<div className="gm">
      <div> {this.renderQuery()} </div>
      <div>{this.renderOpBtn()}</div>
      <div> {this.renderTable()}</div>
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
