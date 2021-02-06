import { articles } from '../../../data';

export default function handler(req, res) {
  const id = req.query.id;

  const filtered = articles.filter((article) => article.id === id);
  //filter returns an array. so it should return an array of just that article
  if (filtered.length > 0) {
    res.status(200).json(articles[0]);
  } else {
    res.status(404).json({ message: `article with the id ${id} is not found` });
  }
}
