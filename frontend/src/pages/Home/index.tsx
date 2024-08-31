import { useCallback, useState } from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Tittle from '../../components/Tittle/Tittle';
import RecommendedBooks from '../../components/Books/RecommendedBooks';

const genderBooks = ['Ação', 'Aventura', 'Biografia', 'Comédia', 'Drama', 'Ficção'];

const Home = () => {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleSelect = useCallback(
    (title: string) => {
      if (selectedGender.includes(title)) {
        const removeGender = selectedGender.filter((item) => item !== title);
        setSelectedGender(removeGender);
      } else {
        setSelectedGender([...selectedGender, title]);
      }
      console.log(selectedGender);
      
    },
    [selectedGender],
  );

  return ( 
    <>
      <Header />
      <Container>
        <Tittle title='O que você gostaria de ler hoje?' />
        <div className="grid grid-cols-8 gap-5 mt-5">
          {genderBooks.map(book => (
            <Button key={book} title={book} variant='light' onClick={() => handleSelect(book)}/>
          ))}
        </div>

        <h2 className='mt-12 text-2xl w-fit font-bold text-evergreen'>Sobre o que você gostaria de receber uma recomendação de livro?</h2>
        <form action="">
          <input type="text" placeholder='Eu gostaria de ler' className='mt-7 w-full px-5 py-3 rounded-xl border shadow-lg text-black'/>
        </form>

        <h2 className='mt-8 text-2xl w-fit font-bold text-evergreen'>Livros recomendados</h2>

        <RecommendedBooks />
      
      </Container>
    </>
   );
}
 
export default Home;