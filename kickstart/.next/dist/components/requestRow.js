'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/avinash/Desktop/Projects/Eth-Smart-Contracts/kickstart/components/requestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalCount > approversCount / 2;

            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'teal', onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU87O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRUYscUZBQVksbUJBQUE7MEJBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ0Y7QUFERSx1Q0FDUyx3QkFBUyxNQUFBLEFBQUssTUFEdkIsQUFDUyxBQUFvQjs0Q0FEN0I7bUNBRWUsY0FBQSxBQUFLLElBRnBCLEFBRWUsQUFBUzs7NkJBQTFCO0FBRkUsZ0RBQUE7NENBQUE7NENBR0YsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NDQUMzQyxTQUpGLEFBR0YsQUFBb0QsQUFDaEQsQUFBUztBQUR1QyxBQUN0RCw2QkFERTs7NkJBSEU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQixBQVFaLHNGQUFhLG9CQUFBOzBCQUFBOzRFQUFBOzBCQUFBO3VEQUFBOzZCQUNIO0FBREcsdUNBQ1Esd0JBQVMsTUFBQSxBQUFLLE1BRHRCLEFBQ1EsQUFBb0I7NkNBRDVCO21DQUVjLGNBQUEsQUFBSyxJQUZuQixBQUVjLEFBQVM7OzZCQUExQjtBQUZHLGlEQUFBOzZDQUFBOzRDQUdILEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NDQUM1QyxTQUpELEFBR0gsQUFBcUQsQUFDakQsQUFBUztBQUR3QyxBQUN2RCw2QkFERTs7NkJBSEc7NkJBQUE7NkNBQUE7O0FBQUE7eUJBQUE7QTs7Ozs7aUNBUUo7Z0JBQUEsQUFDRSxNQURGLEFBQ2UsdUJBRGYsQUFDRTtnQkFERixBQUNPLE9BRFAsQUFDZSx1QkFEZixBQUNPO3lCQUMwQixLQUZqQyxBQUVzQztnQkFGdEMsQUFFRSxZQUZGLEFBRUU7Z0JBRkYsQUFFTSxpQkFGTixBQUVNO2dCQUZOLEFBRWUsd0JBRmYsQUFFZSxBQUNwQjs7Z0JBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBRS9EOzttQ0FDSyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxtQkFBaUIsQ0FBQyxRQUE3RCxBQUFxRTs4QkFBckU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsZUFESixBQUNJLEFBQ0EscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBRkosQUFFSSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsNkJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUh0QyxBQUdJLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBSkosQUFJSSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBQUEsQUFBZSxlQUFnQixLQUxuQyxBQUtJLEFBQ0EsaUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNwQixBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLFNBQVEsU0FBUyxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUE7QUFBQTthQUFBLEVBUlIsQUFNSSxBQUVJLEFBS0osNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNwQixBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLFFBQU8sU0FBUyxLQUFwQyxBQUF5Qzs4QkFBekM7Z0NBQUE7QUFBQTthQUFBLEVBaEJaLEFBQ0ksQUFhSSxBQUVJLEFBT2Y7Ozs7O0FBR0wsQSxBQWpEeUI7O2tCQWlEekIsQUFBZSIsImZpbGUiOiJyZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2F2aW5hc2gvRGVza3RvcC9Qcm9qZWN0cy9FdGgtU21hcnQtQ29udHJhY3RzL2tpY2tzdGFydCJ9