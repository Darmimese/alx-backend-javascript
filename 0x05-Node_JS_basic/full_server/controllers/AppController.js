/**
 * Contains the miscellaneous route handlers.
 * @author Darmi Seyoum<https://github.com/Darmimese>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
