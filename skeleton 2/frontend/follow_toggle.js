const APIUtil = require('./api_util.js');

class FollowToggle {
    constructor (el) {
        this.$el = $(el)
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on("click", this.handleClick.bind(this));
    }

    render () {
        if (this.followState === false) {
            this.$el.html("Follow!");
            this.$el.prop('disabled', false);
        } else if (this.followState === true) {
            this.$el.html("Unfollow!");
            this.$el.prop('disabled', false);
        }
    }

    handleClick(e) {
        e.preventDefault();
        if (this.followState === false) {
            APIUtil.followUser(this.userId).then(() => {

                this.followState = true;
                this.render();
            })
        } else {
            APIUtil.unfollowUser(this.userId).then(() => {

                this.followState = false;
                this.render();
            })
        }
    }
}


module.exports = FollowToggle;