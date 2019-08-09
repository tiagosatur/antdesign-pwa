import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
    Layout,
    Row, 
    Col,
    Checkbox,
    Card,
    Input,
    Button,
    Modal,
    Icon,
    notification,
    DatePicker,
    Select,
    Typography
  } from 'antd';
import {
    plainOptionsJob,
    plainOptionsObsType,
    plainOptionsInsecurity,
    plainOptionsPeopleReaction,
    plainOptionsEPI,
} from '../constants/checkboxes';

const AntDesign = () => {
    moment.locale('pt-BR');
    moment().format('L');
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const { Content } = Layout;
    const { Option } = Select;
    const { Title, Paragraph, Text } = Typography;
  
    const onChange = (checkedValues) => {
      console.log('checked = ', checkedValues);
    }
    const handleModal = () => {
      setIsModalVisible(false);
    }

    const openNotification = () => {
        notification.open({
          message: 'Atualização realizada!',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          icon: <Icon type="smile" style={{ color: '#41bf0d' }} />,
          duration: 3,
        });
      };
    

    return (
      <>
        <Layout>
            <Content>
                <Row>
                    <Col xs={12} sm={12} md={10} lg={12} xl={10}>
                        <h2>Ant Design</h2>
                    </Col>        
                </Row>
                <Row>
                    <Col>
                        <Card>
                    <Button type="primary" onClick={() => setIsModalVisible(true)}>
                        Abrir Modal
                    </Button>
                    <Modal
                        title="Basic Modal"
                        visible={isModalVisible}
                        onOk={handleModal}
                        onCancel={handleModal}
                    >
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                    </Modal>
                    <Button 
                        type="primary" 
                        ghost
                        onClick={openNotification}
                        className='m-2'
                    >
                        Abrir notificação
                    </Button>
                    <br />
                    <DatePicker 
                        defaultValue={moment('01/07/2019', 'DD/MM/YYYY')}  
                        format='DD/MM/YYYY'
                        onChange={onChange} 
                    />
                      <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Selecione um país"
                        defaultValue={['china']}
                        onChange={() => {}}
                        optionLabelProp="label"
                        className='my-2'
                      >
                        <Option value="china" label="China">
                            <span role="img" aria-label="China">
                                🇨🇳{' '}
                            </span>
                            China
                        </Option>
                        <Option value="usa" label="USA">
                            <span role="img" aria-label="USA">
                                🇺🇸{' '}
                            </span>
                            USA
                        </Option>
                        <Option value="japan" label="Japan">
                            <span role="img" aria-label="USA">
                                🇯🇵{' '}
                            </span>
                            Japan
                        </Option>
                        <Option value="koean" label="Koean">
                            <span role="img" aria-label="USA">
                                🇰🇷{' '}
                            </span>
                            Koean
                        </Option>
                    </Select>,
                </Card>
                
                </Col>
            </Row>
            <Row>
              <Col>
                <Card title="CARTÃO DE OBSERVAÇÃO POP" bordered={false} className='w-100'>
                  <Col span={12}>
                    <Checkbox.Group options={plainOptionsJob} onChange={onChange} className='d-flex flex-column' />
                  </Col>
                  <Col span={12}>
                    <Checkbox.Group options={plainOptionsObsType} defaultValue={['Programada']} onChange={onChange} style={{display: 'flex', flexDirection: 'column'}} />
                  </Col>
                </Card>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Card className='mb-4'>
                  <Checkbox.Group options={plainOptionsInsecurity} onChange={onChange} />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Title level={4} className='mb-2'>Reações das Pessoas</Title>
                <Card className='mr-1'>
                  <Checkbox.Group options={plainOptionsPeopleReaction} onChange={onChange} />
                </Card>
              </Col>
              <Col span={12}>
                <Title level={4} className='mb-2'>Equipamentos de Proteção Individual</Title>
                <Card className='ml-1 mb-4'>
                  <Checkbox.Group options={plainOptionsEPI} onChange={onChange} className='d-flex flex-column' />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title level={4} className='mb-2'>Preencha este Relatório de Observação</Title>                
                <Input.TextArea 
                    rows={8} 
                    className='mb-4'
                    defaultValue='Caffeine blue mountain single origin et viennese cortado caffeine. Spoon at cultivar so, con panna, and java trifecta aftertaste cinnamon. Blue mountain variety turkish single origin as grinder strong to go.'
                >  
                </Input.TextArea>
              </Col>
            </Row>
            <Row>
              <Col md={{offset: 21}}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Content>
        </Layout>
      </>
    );
  }

  export default AntDesign;