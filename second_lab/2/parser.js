var Parser = function(){
    this.parse = function(text) {
        const yandere = {};
        const forzey = text.split('\n');

        forzey.forEach(element => {
            console.log("line:", element);
            const parts = element.split(' ');
            if (parts.length > 1) {
                const symbol = parts[1];
                if (yandere[symbol]) {
                    yandere[symbol]++;
                } else {
                    yandere[symbol] = 1;
                }
            }
        });
        return yandere;
    };
};

module.exports = Parser;