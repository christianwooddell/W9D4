const APIUtil = require ("./api_util.js")

class UsersSearch {

    constructor (ele) {
        this.$ele = $(ele);
        this.$input = this.$ele.find("input[name=user[username]]");
        this.$ul = this.$ele.find(".users")
    }

    handleInput (e) {
        APIUtil.searchUsers(this.$input.val().then(() => {
            let $li = $("<li>")
        })
    }
}