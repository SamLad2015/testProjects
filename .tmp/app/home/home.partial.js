(function(module) {
try {
  module = angular.module('employeeManager');
} catch (e) {
  module = angular.module('employeeManager', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/home/home.partial.html',
    '<type-ahead items="vm.contacts" model="searchName" filter-property="vm.filterProperty" start-search-after-milliseconds="200"><div class="table"><div class="header"><div><span>Name</span></div><div><span>Phone Number</span></div><div class="actions">Actions</div></div><div class="row" ng-repeat="contact in vm.contacts track by contact.id"><div>{{::contact.firstName}} {{::contact.lastName}}</div><div>{{contact.phoneNumber}}</div><div class="actions"><span ng-click="vm.editContact(contact.id)">Edit</span> <span ng-click="vm.deleteContact(contact.id)">Delete</span></div></div></div><div class="addPanel"><div><span>First Name</span> <input type="text" ng-model="vm.tempContact.firstName"></div><div><span>Last Name</span> <input type="text" ng-model="vm.tempContact.lastName"></div><div><span>Phone Number</span> <input type="text" ng-model="vm.tempContact.phoneNumber"></div><div><button ng-click="vm.addEditContact()">Submit</button></div></div></type-ahead>');
}]);
})();
