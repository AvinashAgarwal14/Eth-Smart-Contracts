'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = function instance(address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImluc3RhbmNlIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7OztBQUVBLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQyxBQUFELFNBQWEsQUFDMUI7V0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDSCxLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQURHLFlBRUgsQUFGRyxBQUFQLEFBSUg7QUFMRCxBQU9BOztrQkFBZSxBQUFmIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2F2aW5hc2gvRGVza3RvcC9Qcm9qZWN0cy9FdGgtU21hcnQtQ29udHJhY3RzL2tpY2tzdGFydCJ9