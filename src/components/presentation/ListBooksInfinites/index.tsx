import { Book } from '../../../interfaces/book'
import * as S from './styles'
import { CardBook } from '../../core/CardBook/index'

const books: Book[] = [
  {
    authors: 'Frederico Silva, Márcia Xavier',
    title: 'Aspernatur molestiae quasi',
    description:
      'Repellat velit neque delectus mollitia. Et eos nostrum id blanditiis odio sed. Dolorem atque sit tempora et excepturi sint suscipit at.\n \rAb voluptatum possimus. Culpa laborum consequuntur sit molestiae repellendus eos distinctio. Asperiores quia consectetur perspiciatis nobis et exercitationem hic distinctio.',
    pageCount: 810,
    category: 'Biografias',
    imageUrl: 'https://files-books.ioasys.com.br/Book-10.jpg',
    language: 'Inglês',
    isbn10: '9007883404',
    isbn13: '984-9007883404',
    publisher: 'Oliveira, Martins and Pereira',
    published: 2016,
    id: '60171639faf5de22b804a076',
  },
  {
    authors: 'Raul Pereira, Júlia Pereira Filho, Natália Barros Jr.',
    title: 'Assumenda',
    description:
      'Est cupiditate rerum sed nisi quam dolorem vel qui veniam. Veritatis quam expedita. Dolor unde animi est dolor unde qui nisi. Iusto in saepe repellendus officia omnis aut reiciendis sapiente. Voluptate et at ut. Velit est iure repellat doloribus omnis earum laborum.\n \rModi sapiente laudantium similique recusandae modi eveniet minima sint in. Eum autem nihil est enim a nostrum quaerat magnam. Et tempora iure quidem aliquid rerum accusamus id.',
    pageCount: 990,
    category: 'Biografias',
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    language: 'Inglês',
    isbn10: '6163701883',
    isbn13: '951-6163701883',
    publisher: 'Barros - Xavier',
    published: 2003,
    id: '60171639faf5de22b804a06e',
  },
  {
    authors: 'Lorraine Barros, Sra. Ofélia Silva, Warley Pereira',
    title: 'Aut',
    description:
      'Qui omnis est commodi consectetur est. Odio ullam id ipsam suscipit numquam iusto iste consectetur. Sed ut est. Qui repellat corrupti veritatis consequatur quos ipsa.\n \rAtque dignissimos et eligendi numquam placeat ex. Consectetur sed aut autem ea id suscipit nihil a. Sunt repellendus suscipit reiciendis quidem sequi aut optio placeat quia. Quidem excepturi vel voluptate nisi molestiae soluta. Et nam et impedit illo accusamus sed earum est recusandae. Et delectus repellat enim distinctio velit et.',
    pageCount: 965,
    category: 'Biografias',
    imageUrl: 'https://files-books.ioasys.com.br/Book-5.jpg',
    language: 'Português',
    isbn10: '3355205900',
    isbn13: '112-3355205900',
    publisher: 'Martins - Xavier',
    published: 2019,
    id: '60171639faf5de22b804a16c',
  },
  {
    authors: 'Deneval Oliveira',
    title: 'Aut est molestiae',
    description:
      'Occaecati nulla minus perspiciatis consectetur. Distinctio provident temporibus et qui et sit. Illum ipsa dolores asperiores necessitatibus voluptatem magni cumque. Quod qui architecto est excepturi quo aliquam ratione aut. Voluptas illum natus numquam libero molestias soluta.\n \rMagnam fuga atque animi. Nobis occaecati est optio quia rerum eius optio impedit voluptatem. Officiis doloribus eligendi ut est.',
    pageCount: 58,
    category: 'Biografias',
    imageUrl: 'https://files-books.ioasys.com.br/Book-6.jpg',
    language: 'Português',
    isbn10: '2529602528',
    isbn13: '198-2529602528',
    publisher: 'Barros - Reis',
    published: 2016,
    id: '60171638faf5de22b8049f8b',
  },
  {
    authors:
      'Alessandro Martins, Alessandra Nogueira, Sra. Eduardo Albuquerque',
    title: 'Commodi et',
    description:
      'Ipsa et asperiores sit ut quo beatae. Nobis ducimus a et velit explicabo quis sed consequuntur qui. Placeat minus veritatis. Porro qui magni inventore quis illum voluptatem natus quia odit. Est praesentium velit facere distinctio perspiciatis dolores voluptates hic.\n \rEst et architecto neque qui eum sit facilis. Soluta et autem minus suscipit quos quia quas. Est qui sed et.',
    pageCount: 2028,
    category: 'Biografias',
    imageUrl: 'https://files-books.ioasys.com.br/Book-2.jpg',
    language: 'Inglês',
    isbn10: '8250544256',
    isbn13: '523-8250544256',
    publisher: 'Oliveira LTDA',
    published: 2012,
    id: '60171639faf5de22b8049fd0',
  },
  {
    authors: 'Breno Xavier',
    title: 'Consequatur',
    description:
      'Odit illo excepturi beatae at nulla veniam suscipit. Nemo aperiam assumenda. Error qui neque eligendi molestiae voluptatem similique delectus. Distinctio autem quis dolores voluptate. Sed rerum quo.\n \rEsse culpa recusandae veritatis. Iste voluptatem minima nihil laboriosam voluptatibus. Vitae quasi perferendis. Repudiandae iusto repellat fuga placeat dolorem quaerat.',
    pageCount: 1257,
    category: 'Biografias',
    imageUrl: 'https://files-books.ioasys.com.br/Book-3.jpg',
    language: 'Inglês',
    isbn10: '8737301068',
    isbn13: '762-8737301068',
    publisher: 'Martins e Associados',
    published: 2020,
    id: '60171639faf5de22b8049fd7',
  },
]

export const ListBooksInfinites = () => {
  return (
    <S.List>
      {books.map((book) => (
        <CardBook key={book.id} book={book} />
      ))}
    </S.List>
  )
}
