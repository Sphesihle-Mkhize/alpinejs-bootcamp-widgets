function transportFeeWidget() {
    return {
        shift: 'morning',
        fee: '',
        calculateFee() {
            const fees = {
                morning: 'R20',
                afternoon: 'R10',
                nightshift: 'free'
            };
            this.fee = fees[this.shift];
        }
    }
}