/**
 * ExampleController
 *
 * @description :: Server-side logic for managing examples
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    example: function (req, res) {
        return res.json({myLength: req.param('length')})
    }	
};

