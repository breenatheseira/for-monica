import Card from '../../components/card/Card.jsx';
import CardBody from '../../components/card/CardBody.jsx';
import CardHeading from '../../components/card/CardHeading.jsx';
import Title from '../../components/card/Title.jsx';

export default Login = () => {
  return (
    <div className='flex flex-col h-screen bg-slate-200'>
      <Card>
        <CardHeading>
          <Title text="Welcome :)" />
        </CardHeading>
        <CardBody>
          <div>Please login to continue.</div>
        </CardBody>
      </Card>
    </div>
  )
}