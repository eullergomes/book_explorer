const BooksData = [
  {
    id: 1,
    title: 'O Código Limpo',
    author: 'Robert C. Martin',
    gender: 'Computer Engineer',
    sinopse:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.'
  },
  {
    id: 2,
    title: 'Javascript',
    author: 'Robert C. Martin',
    gender: 'Computer Engineer',
    sinopse:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.'
  },
  {
    id: 3,
    title: 'O Código Limpo',
    author: 'Robert C. Martin',
    gender: 'Computer Engineer',
    sinopse:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.'
  },
  {
    id: 4,
    title: 'Javascript',
    author: 'Robert C. Martin',
    gender: 'Computer Engineer',
    sinopse:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.'
  },
  {
    id: 5,
    title: 'O Código Limpo',
    author: 'Robert C. Martin',
    gender: 'Computer Engineer',
    sinopse:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.'
  },
  {
    id: 6,
    title: 'Javascript',
    author: 'Robert C. Martin',
    gender: 'Computer Engineer',
    sinopse:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst. Curabitur at massa vel nulla pulvinar dignissim.'
  }
]

const RecommendedBooks = () => {
  return ( 
    <div className='grid grid-cols-3 gap-4 mt-12'>
      {BooksData.map((book) => (
        <div key={book.id} className='flex gap-4 border rounded-lg shadow-lg px-2 py-1'>
          <div className='w-[882px] h-[258px] bg-blue-500'></div>

          <div>
            <h2 className='font-bold'>{book.title}</h2>
            <p>{book.author}</p>
            <span>{book.gender}</span>
            <p>Sinopse: {book.sinopse}</p>
          </div>
        </div>       
      ))}
    </div>    
  );
}
 
export default RecommendedBooks;