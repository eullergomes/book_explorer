import BackgroundImage from "../../assets/img/background-header.png";
import Button from '../Button/Button';
import Container from "../Container/Container";
import HeaderTitle from './HeaderTitle';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
      className='w-auto bg-cover bg-center bg-no-repeat'
    >
      <Container>
        <HeaderTitle />

        <div className='mt-28 w-2/3'>
          <h2 className='text-6xl font-bold text-evergreen'>Encontre livros <br /> que sejam a sua cara!</h2>
          <p className='text-gray-500 my-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa mollitia voluptatibus ducimus voluptatem quam earum consectetur tempora temporibus consequatur.</p>
          <Button title='Pesquisar livros'/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
