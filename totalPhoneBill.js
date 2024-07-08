function totalPhoneBillWidget() {
    return {
        phoneUsage: '',
        totalBill: '',
        calculateBill() {
            if (this.phoneUsage.trim() === '') {
                this.totalBill = 'Please enter phone usage.';
                return;
            }
            const calls = this.phoneUsage.split(',').filter(item => item.trim() === 'call').length;
            const sms = this.phoneUsage.split(',').filter(item => item.trim() === 'sms').length;
            const total = (calls * 2.75) + (sms * 0.65);
            this.totalBill = `Total bill: R${total.toFixed(2)}`;
        }
    };
}