const Books=require('../models/slots');
const BooksReturned=require('../models/bookedSlots');

exports.getBooks = (req, res, next) => {
  Books.findAll().then((datas)=>{
    const data=datas.map(i=>i.dataValues); 
    console.log(data);
     res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
};




exports.deletebook = (req, res, next) => {
   const bookId=req.params.id;
   console.log(bookId);
  Books.findByPk(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
      }
      return book.destroy()
        .then(() => {
          return BooksReturned.create({
            bookName: book.bookName,
            returnDate: book.returnDate,
            fine: book.currentFine
          });
        })
        .then(returnedBook => {
          console.log(returnedBook);
          res.send(returnedBook);
        })
        .catch(error => {
          console.error('Error deleting book:', error);
          res.status(500).json({ message: 'Internal server error.' });
        });
    })
    .catch(error => {
      console.error('Error finding book:', error);
      res.status(500).json({ message: 'Internal server error.' });
    });
};


exports.getreturnedBooks=(req,res,next)=>{
  BooksReturned.findAll().then((datas)=>{
    const data=datas.map(i=>i.dataValues); 
    console.log(data);
     res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
}