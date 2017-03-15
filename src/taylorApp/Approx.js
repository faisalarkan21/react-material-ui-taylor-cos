
function TaylorFunctionApproximator(name, calculateTermNext) {
    this.name = name;
    this.calculateTermNext = calculateTermNext;

    this.numberOfTermsToCalculate = 32; // default;
}
{
    TaylorFunctionApproximator.Instances = new TaylorFunctionApproximator_Instances();

    function TaylorFunctionApproximator_Instances() {
        this.cosine = new TaylorFunctionApproximator("cosine",
        // calculateTermNext
        function (termCurrent, index, parameter) {
            if (index == 0) {
                termCurrent = new Term(1, 1);
            } else {
                termCurrent
                    .multiplyScalar(parameter * parameter * -1)
                    .divideScalar((2 * index - 1) * (2 * index));
            }

            return termCurrent;
        });

        this.exponential = new TaylorFunctionApproximator("exponential",
        // calculateTermNext
        function (termCurrent, index, parameter) {
            if (index == 0) {
                termCurrent = new Term(1, 1);
            } else {
                termCurrent
                    .multiplyScalar(parameter)
                    .divideScalar(index);
            }

            return termCurrent;
        });

        this.naturalLog = new TaylorFunctionApproximator("naturalLog",
        // calculateTermNext
        function (termCurrent, index, parameter) {
            // Only accurate in range (-1 <= parameter <= 1, parameter != 0)

            if (index == 0) {
                termCurrent = new Term(parameter - 1, 1);
            } else {
                termCurrent.multiplyScalar(0 - (parameter - 1));

                termCurrent.denominator = index + 1;
            }

            return termCurrent;
        });

        this.sine = new TaylorFunctionApproximator("sine",
        // calculateTermNext
        function (termCurrent, index, parameter) {
            if (index == 0) {
                termCurrent = new Term(parameter, 1);
            } else {
                termCurrent
                    .multiplyScalar(parameter * parameter * -1)
                    .divideScalar((2 * index) * (2 * index + 1));
            }

            return termCurrent;
        });
    }

    TaylorFunctionApproximator.prototype.calculate = function (parameter) {
        var sumSoFar = 0;

        var termCurrent = null;

        for (var i = 0; i < this.numberOfTermsToCalculate; i++) {
            termCurrent = this.calculateTermNext(termCurrent, i, parameter);

            sumSoFar += termCurrent.toNumber();
        }

        return sumSoFar;
    }
}

function Term(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
{
    Term.prototype.clone = function () {
        return new Term(this.numerator, this.denominator);
    }

    Term.prototype.divide = function (other) {
        this.numerator *= other.denominator;
        this.denominator *= other.numerator;

        return this;
    }

    Term.prototype.divideScalar = function (scalar) {
        this.denominator *= scalar;

        return this;
    }

    Term.prototype.multiply = function (other) {
        this.numerator *= other.numerator;
        this.denominator *= other.denominator;

        return this;
    }

    Term.prototype.multiplyScalar = function (scalar) {
        this.numerator *= scalar;

        return this;
    }

    Term.prototype.toNumber = function () {
        return this.numerator / this.denominator;
    }
}