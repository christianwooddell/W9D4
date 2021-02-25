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
        } else if (this.followState === "following") {
            this.$el.html("Unfollowing...");
            this.$el.prop('disabled', true);
        } else if (this.followState === "unfollowing") {
            this.$el.html("Following...");
            this.$el.prop('disabled', true);
        }
    }

    handleClick(e) {
        e.preventDefault();
        if (this.followState === false) {
            this.followState = "following";
            this.render();
            APIUtil.followUser(this.userId).then(() => {
                
                this.followState = true;
                this.render();
            })
        } else {
            this.followState = "unfollowing";
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {

                this.followState = false;
                this.render();
            })
        }
    }
}


module.exports = FollowToggle;