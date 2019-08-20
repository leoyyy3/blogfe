
// const moment = require('moment')

var Blog = require('./blog');

exports.queryBlog = function(req, res) {
    // console.log('query',Blog)
    Blog.find({},function(err, user) {
        // console.log('-=-=-=-=-=-',err,user)
      if (err)
        res.send(err);
      else if (!user) {
        res.json({success: false, message: 'Please create an account'});
      } else {
          res.json(user)
    //     bcrypt.compare(req.body.password, user.password, function(err, valid) {
    //       if (valid === true) {
    //       // password matches
    //       var token = jwt.sign({user: user.email}, app.get('secret'));
    //       res.json({success: true, message: 'Login sucessful', token: token, userid: user._id});
    //     } else if (valid === false) {
    //       // password does not match
    //       res.json({ success: false, message: 'Login failed. Incorrect password!'});
    //   }
    // });
    }
  });
};

// exports.insert = (req, res) => {
//     const { category, content, title } = req.body
//     const html = marked(content)
//     const arr_category = category.split('|')
//     const data = {
//         title,
//         category: arr_category[0],
//         category_name: arr_category[1],
//         content,
//         html,
//         visit: 0,
//         like: 0,
//         comment_count: 0,
//         creat_date: moment().format('YYYY-MM-DD HH:mm:ss'),
//         update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
//         is_delete: 0,
//         timestamp: moment().format('X')
//     }
//     Article.createAsync(data)
//         .then(result => {
//             return Category.updateOneAsync({ _id: arr_category[0] }, { $inc: { cate_num: 1 } }).then(() => {
//                 return res.json({
//                     code: 200,
//                     message: '发布成功',
//                     data: result
//                 })
//             })
//         })
//         .catch(err => {
//             res.json({
//                 code: -200,
//                 message: err.toString()
//             })
//         })
// }