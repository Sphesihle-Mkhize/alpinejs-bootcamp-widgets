function enoughAirtimeWidget() {
    return {
        usage: '',
        availableAirtime: 0,
        result: '',
        calculateAirtime() {
            if (this.usage.trim() === '' || this.availableAirtime === 0) {
                this.result = 'Please enter usage and available airtime.';
                return;
            }
            const usageArray = this.usage.split(',');
            let totalCost = 0;
            usageArray.forEach(item => {
                if (item.trim() === 'call') totalCost += 2.75;
                if (item.trim() === 'sms') totalCost += 0.65;
                if (item.trim() === 'data') totalCost += 12;
            });
            if (totalCost <= this.availableAirtime) {
                this.result = 'You have enough airtime.';
            } else {
                this.result = 'Sorry, you do not have enough airtime!';
            }
        }
    };
}