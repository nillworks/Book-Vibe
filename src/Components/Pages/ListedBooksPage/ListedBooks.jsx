import SortDropdown from './SortDropdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks/ReadBooks';
import useBooksData from '../../Hooks/useBooksData';
import WishListBooksRender from './WishlistBooks/WishListBooksRender';

const ListedBooks = () => {
  const { redBookData, wishlistBooks } = useBooksData();
  console.log(wishlistBooks);

  return (
    <section className="containers">
      {/* Title */}
      <div className="py-10 bg-PrimaryBg text-center lg:rounded-2xl">
        <h2 className="text-[28px] font-bold">Books</h2>
      </div>

      {/* Sort By */}
      {/* <div className="text-center py-4">
        <SortDropdown />
      </div> */}

      {/* Tabs */}
      <div className="px-3 pt-5">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <section className="grid items-center gap-4 grid-cols-1 py-10">
              {redBookData.map(item => (
                <ReadBooks key={item.bookId} redBookData={item} />
              ))}
            </section>
          </TabPanel>
          <TabPanel>
            <section className="grid items-center gap-4 grid-cols-1 py-10">
              {wishlistBooks.map(item => (
                <WishListBooksRender key={item.bookId} wishlistBooks={item} />
              ))}
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooks;
