import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus (request, response) {
    response.status(200)
      .json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  static async getStats (request, response) {
    const NumOfUsers = await dbClient.nbUsers();
    const NumOfFiles = await dbClient.nbFiles();
    response.status(200)
      .json({ users: NumOfUsers, files: NumOfFiles });
  }
}
module.exports = AppController;
