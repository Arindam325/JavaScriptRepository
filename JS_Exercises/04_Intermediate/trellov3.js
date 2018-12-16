let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(meet=0){
        this.meetings = this.meetings + meet;
        //console.log(`The total Meeting ${this.meetings}.`);
    },
    meetingDone: function(meet=0){
        this.meetDone = this.meetDone + meet;
        //console.log(`The total meeting completed number is ${this.meetDone}`);
    },
    resetDay: function(){
        this.meetings = 0;
        this.meetDone = 0;
    },
    getSummaryOfDay: function(){
        let meetLeft = this.meetings - this.meetDone;
        return `You have ${meetLeft} meetings left.`;
    }
};

myTodos.addMeeting(3);
myTodos.addMeeting(7);
myTodos.meetingDone(4);
console.log(myTodos.getSummaryOfDay());