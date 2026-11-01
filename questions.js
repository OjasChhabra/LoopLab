const QUESTIONS = [
  {
    "id": "C01",
    "title": "Find the Larger of Two Numbers",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read two integers and print the larger number. If both numbers are equal, print that they are equal.",
    "input": "Two integers a and b.",
    "output": "Print the larger number, or `Equal` if both are the same.",
    "sampleIn": "12 7",
    "sampleOut": "12",
    "explanation": "12 is greater than 7, so it is printed.",
    "hints": [
      "Compare the two values using `if`.",
      "Use `else if` to check the opposite case.",
      "Use `else` for equality."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (a > b) cout << a;\n    else if (b > a) cout << b;\n    else cout << \"Equal\";\n    return 0;\n}"
  },
  {
    "id": "C02",
    "title": "Even or Odd",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "3 min",
    "statement": "Read an integer and determine whether it is even or odd.",
    "input": "One integer n.",
    "output": "Print `Even` or `Odd`.",
    "sampleIn": "17",
    "sampleOut": "Odd",
    "explanation": "17 divided by 2 leaves a remainder of 1.",
    "hints": [
      "The remainder operator is `%`.",
      "An even number leaves remainder 0 when divided by 2.",
      "Check `n % 2 == 0`."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    if (n % 2 == 0) cout << \"Even\";\n    else cout << \"Odd\";\n    return 0;\n}"
  },
  {
    "id": "C03",
    "title": "Voting Eligibility",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "3 min",
    "statement": "Read a person's age. Print `Eligible` if the age is at least 18; otherwise print `Not Eligible`.",
    "input": "One integer age.",
    "output": "Print the eligibility message.",
    "sampleIn": "19",
    "sampleOut": "Eligible",
    "explanation": "19 is greater than or equal to 18.",
    "hints": [
      "Use a comparison with 18.",
      "The phrase 'at least' includes 18 itself.",
      "An `if/else` is enough."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int age;\n    cin >> age;\n    if (age >= 18) cout << \"Eligible\";\n    else cout << \"Not Eligible\";\n    return 0;\n}"
  },
  {
    "id": "C04",
    "title": "Positive, Negative, or Zero",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "4 min",
    "statement": "Read an integer and classify it as positive, negative, or zero.",
    "input": "One integer n.",
    "output": "Print `Positive`, `Negative`, or `Zero`.",
    "sampleIn": "-6",
    "sampleOut": "Negative",
    "explanation": "-6 is less than zero.",
    "hints": [
      "Check equality with zero first.",
      "Then check whether the number is greater than zero.",
      "The remaining case is negative."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    if (n == 0) cout << \"Zero\";\n    else if (n > 0) cout << \"Positive\";\n    else cout << \"Negative\";\n    return 0;\n}"
  },
  {
    "id": "C05",
    "title": "Day of the Week",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read a number from 1 to 7 and print its day name. Use 1 for Monday, 2 for Tuesday, ..., 7 for Sunday. For any other number, print `Invalid`.",
    "input": "One integer day.",
    "output": "The corresponding day name, or `Invalid`.",
    "sampleIn": "5",
    "sampleOut": "Friday",
    "explanation": "According to the mapping, 5 represents Friday.",
    "hints": [
      "This is a good use case for `switch`.",
      "Create one `case` for each number from 1 to 7.",
      "Use `default` for invalid input."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int day;\n    cin >> day;\n    switch (day) {\n        case 1: cout << \"Monday\"; break;\n        case 2: cout << \"Tuesday\"; break;\n        case 3: cout << \"Wednesday\"; break;\n        case 4: cout << \"Thursday\"; break;\n        case 5: cout << \"Friday\"; break;\n        case 6: cout << \"Saturday\"; break;\n        case 7: cout << \"Sunday\"; break;\n        default: cout << \"Invalid\";\n    }\n    return 0;\n}"
  },
  {
    "id": "C06",
    "title": "Leap Year Checker",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a year and determine whether it is a leap year. A year is a leap year if it is divisible by 400, or if it is divisible by 4 but not by 100.",
    "input": "One integer year.",
    "output": "Print `Leap Year` or `Not a Leap Year`.",
    "sampleIn": "2000",
    "sampleOut": "Leap Year",
    "explanation": "2000 is divisible by 400.",
    "hints": [
      "Check divisibility using `%`.",
      "The divisible-by-400 condition must be accepted.",
      "Otherwise, divisibility by 4 works only when the year is not divisible by 100."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int year;\n    cin >> year;\n    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))\n        cout << \"Leap Year\";\n    else\n        cout << \"Not a Leap Year\";\n    return 0;\n}"
  },
  {
    "id": "C07",
    "title": "Check Divisibility by 5",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "3 min",
    "statement": "Read an integer and print `Divisible` if it is divisible by 5; otherwise print `Not Divisible`.",
    "input": "One integer n.",
    "output": "One of the two messages.",
    "sampleIn": "35",
    "sampleOut": "Divisible",
    "explanation": "35 % 5 is 0, so 35 is divisible by 5.",
    "hints": [
      "Use the remainder operator `%`.",
      "A number is divisible by 5 when its remainder after division by 5 is 0.",
      "Use an if/else."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if (n % 5 == 0) cout << \"Divisible\";\n    else cout << \"Not Divisible\";\n    return 0;\n}"
  },
  {
    "id": "C08",
    "title": "Check Divisibility by Both 5 and 11",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "4 min",
    "statement": "Read an integer and check whether it is divisible by both 5 and 11.",
    "input": "One integer n.",
    "output": "Print `Yes` if both divisibility conditions are true; otherwise print `No`.",
    "sampleIn": "110",
    "sampleOut": "Yes",
    "explanation": "110 is divisible by 5 and also by 11.",
    "hints": [
      "You need two conditions to be true.",
      "Use the logical AND operator `&&`.",
      "Check that both remainders are 0."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    if (n % 5 == 0 && n % 11 == 0) cout << \"Yes\";\n    else cout << \"No\";\n    return 0;\n}"
  },
  {
    "id": "C09",
    "title": "Largest of Three Numbers",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read three integers and print the largest. If the largest value is shared, print that value once.",
    "input": "Three integers a, b, and c.",
    "output": "The largest of the three numbers.",
    "sampleIn": "8 21 13",
    "sampleOut": "21",
    "explanation": "21 is greater than both 8 and 13.",
    "hints": [
      "Compare a against both b and c.",
      "If that fails, compare b against both remaining values.",
      "Otherwise c is the largest (possibly tied)."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c; cin >> a >> b >> c;\n    if (a >= b && a >= c) cout << a;\n    else if (b >= a && b >= c) cout << b;\n    else cout << c;\n    return 0;\n}"
  },
  {
    "id": "C10",
    "title": "Number Within a Given Range",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "4 min",
    "statement": "Read three integers: a number x, a lower bound low, and an upper bound high. Assume low <= high. Check whether x lies inside the inclusive range [low, high].",
    "input": "Three integers x, low, and high.",
    "output": "Print `Inside` or `Outside`.",
    "sampleIn": "7 3 9",
    "sampleOut": "Inside",
    "explanation": "7 is between 3 and 9, including both endpoints.",
    "hints": [
      "The range includes its endpoints.",
      "x must be greater than or equal to low.",
      "It must also be less than or equal to high."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int x, low, high; cin >> x >> low >> high;\n    if (x >= low && x <= high) cout << \"Inside\";\n    else cout << \"Outside\";\n    return 0;\n}"
  },
  {
    "id": "C11",
    "title": "Uppercase, Lowercase, or Neither",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read one character and determine whether it is an uppercase English letter, a lowercase English letter, or neither.",
    "input": "One character ch.",
    "output": "Print `Uppercase`, `Lowercase`, or `Neither`.",
    "sampleIn": "G",
    "sampleOut": "Uppercase",
    "explanation": "G lies between 'A' and 'Z'.",
    "hints": [
      "Characters can be compared using their character codes.",
      "Check the uppercase range 'A' to 'Z'.",
      "Then check the lowercase range 'a' to 'z'."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    if (ch >= 'A' && ch <= 'Z') cout << \"Uppercase\";\n    else if (ch >= 'a' && ch <= 'z') cout << \"Lowercase\";\n    else cout << \"Neither\";\n    return 0;\n}"
  },
  {
    "id": "C12",
    "title": "Vowel or Consonant",
    "topic": "Conditionals",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read one English alphabet character and identify whether it is a vowel or consonant. The input is guaranteed to be an alphabet letter.",
    "input": "One character ch (uppercase or lowercase).",
    "output": "Print `Vowel` or `Consonant`.",
    "sampleIn": "e",
    "sampleOut": "Vowel",
    "explanation": "The letter e is one of a, e, i, o, u.",
    "hints": [
      "A letter is a vowel if it is a, e, i, o, or u.",
      "Convert the test into comparisons against both uppercase and lowercase vowels.",
      "Use logical OR `||` between the vowel checks."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||\n        ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')\n        cout << \"Vowel\";\n    else cout << \"Consonant\";\n    return 0;\n}"
  },
  {
    "id": "C13",
    "title": "Month Name",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "5 min",
    "statement": "Read a number from 1 to 12 and print the corresponding month name, where 1 is January and 12 is December. Print `Invalid` for any other number.",
    "input": "One integer month.",
    "output": "The month name or `Invalid`.",
    "sampleIn": "9",
    "sampleOut": "September",
    "explanation": "Month number 9 represents September.",
    "hints": [
      "Use a switch statement.",
      "Create cases for values 1 through 12.",
      "Use default for an invalid month."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int month; cin >> month;\n    switch (month) {\n        case 1: cout << \"January\"; break;\n        case 2: cout << \"February\"; break;\n        case 3: cout << \"March\"; break;\n        case 4: cout << \"April\"; break;\n        case 5: cout << \"May\"; break;\n        case 6: cout << \"June\"; break;\n        case 7: cout << \"July\"; break;\n        case 8: cout << \"August\"; break;\n        case 9: cout << \"September\"; break;\n        case 10: cout << \"October\"; break;\n        case 11: cout << \"November\"; break;\n        case 12: cout << \"December\"; break;\n        default: cout << \"Invalid\";\n    }\n    return 0;\n}"
  },
  {
    "id": "C14",
    "title": "Smallest of Three Numbers",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "5 min",
    "statement": "Read three integers and print the smallest value. Ties are allowed.",
    "input": "Three integers a, b, and c.",
    "output": "The smallest value.",
    "sampleIn": "14 6 9",
    "sampleOut": "6",
    "explanation": "6 is less than both 14 and 9.",
    "hints": [
      "Check whether a is less than or equal to both other values.",
      "If not, check b.",
      "If neither is smallest, c is a smallest value."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c; cin >> a >> b >> c;\n    if (a <= b && a <= c) cout << a;\n    else if (b <= a && b <= c) cout << b;\n    else cout << c;\n    return 0;\n}"
  },
  {
    "id": "C15",
    "title": "Student Grade Calculator",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read marks out of 100 and print a grade using these rules: 90–100: A, 80–89: B, 70–79: C, 60–69: D, below 60: F. Print `Invalid` if marks are outside 0–100.",
    "input": "One integer marks.",
    "output": "A, B, C, D, F, or Invalid.",
    "sampleIn": "84",
    "sampleOut": "B",
    "explanation": "84 falls in the 80–89 range.",
    "hints": [
      "Reject marks below 0 or above 100 first.",
      "Check the highest grade boundary first.",
      "Use an else-if ladder for the remaining ranges."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int marks; cin >> marks;\n    if (marks < 0 || marks > 100) cout << \"Invalid\";\n    else if (marks >= 90) cout << \"A\";\n    else if (marks >= 80) cout << \"B\";\n    else if (marks >= 70) cout << \"C\";\n    else if (marks >= 60) cout << \"D\";\n    else cout << \"F\";\n    return 0;\n}"
  },
  {
    "id": "C16",
    "title": "Valid Triangle Checker",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read three side lengths. A triangle is valid only if all sides are positive and the sum of any two sides is greater than the third side.",
    "input": "Three positive or non-positive integer values a, b, and c.",
    "output": "Print `Valid` or `Invalid`.",
    "sampleIn": "3 4 5",
    "sampleOut": "Valid",
    "explanation": "3 + 4 > 5, 3 + 5 > 4, and 4 + 5 > 3.",
    "hints": [
      "All three sides must be greater than zero.",
      "Check all three triangle inequalities.",
      "All conditions must be true together."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long a, b, c; cin >> a >> b >> c;\n    if (a > 0 && b > 0 && c > 0 &&\n        a + b > c && a + c > b && b + c > a)\n        cout << \"Valid\";\n    else cout << \"Invalid\";\n    return 0;\n}"
  },
  {
    "id": "C17",
    "title": "Type of Triangle",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read three side lengths. First determine whether they form a valid triangle. If valid, print `Equilateral` when all sides are equal, `Isosceles` when exactly two are equal, or `Scalene` when all are different. Otherwise print `Invalid`.",
    "input": "Three integer side lengths a, b, and c.",
    "output": "One of the four triangle classifications.",
    "sampleIn": "5 5 8",
    "sampleOut": "Isosceles",
    "explanation": "The sides form a valid triangle and exactly two sides are equal.",
    "hints": [
      "Validate the triangle before classifying it.",
      "All three equal means equilateral.",
      "Any matching pair means isosceles; otherwise it is scalene."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c; cin >> a >> b >> c;\n    if (a <= 0 || b <= 0 || c <= 0 ||\n        a + b <= c || a + c <= b || b + c <= a)\n        cout << \"Invalid\";\n    else if (a == b && b == c) cout << \"Equilateral\";\n    else if (a == b || b == c || a == c) cout << \"Isosceles\";\n    else cout << \"Scalene\";\n    return 0;\n}"
  },
  {
    "id": "C18",
    "title": "Profit or Loss Calculator",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "5 min",
    "statement": "Read the cost price and selling price of an item. Print `Profit` if selling price is higher, `Loss` if it is lower, and `No Profit No Loss` if they are equal.",
    "input": "Two non-negative numbers: cost price and selling price.",
    "output": "The correct result message.",
    "sampleIn": "500 650",
    "sampleOut": "Profit",
    "explanation": "The selling price is greater than the cost price.",
    "hints": [
      "Compare selling price with cost price.",
      "A greater selling price means profit.",
      "A lower selling price means loss."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    double cp, sp; cin >> cp >> sp;\n    if (sp > cp) cout << \"Profit\";\n    else if (sp < cp) cout << \"Loss\";\n    else cout << \"No Profit No Loss\";\n    return 0;\n}"
  },
  {
    "id": "C19",
    "title": "Simple Calculator",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read two numbers and an operator (+, -, *, /). Perform the operation. If the operator is invalid or division by zero is requested, print `Invalid`.",
    "input": "Two numbers a and b followed by a character operator.",
    "output": "Print the calculated result, or `Invalid`.",
    "sampleIn": "12 3 /",
    "sampleOut": "4",
    "explanation": "12 divided by 3 equals 4.",
    "hints": [
      "Read the operator as a char.",
      "Use switch to choose the operation.",
      "Before division, check whether the second number is zero."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    double a, b; char op;\n    cin >> a >> b >> op;\n    switch (op) {\n        case '+': cout << a + b; break;\n        case '-': cout << a - b; break;\n        case '*': cout << a * b; break;\n        case '/':\n            if (b == 0) cout << \"Invalid\";\n            else cout << a / b;\n            break;\n        default: cout << \"Invalid\";\n    }\n    return 0;\n}"
  },
  {
    "id": "C20",
    "title": "Days in a Month",
    "topic": "Conditionals",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a month number (1–12) and a year. Print the number of days in that month. February has 29 days in a leap year and 28 otherwise. Print `Invalid` for an invalid month or year.",
    "input": "Two integers: month and year (year must be positive).",
    "output": "28, 29, 30, 31, or `Invalid`.",
    "sampleIn": "2 2024",
    "sampleOut": "29",
    "explanation": "2024 is a leap year, so February has 29 days.",
    "hints": [
      "Check that month is between 1 and 12 and year is positive.",
      "Months 4, 6, 9, and 11 have 30 days.",
      "February depends on the leap-year rule."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int m, y; cin >> m >> y;\n    if (m < 1 || m > 12 || y <= 0) cout << \"Invalid\";\n    else if (m == 2) {\n        if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) cout << 29;\n        else cout << 28;\n    } else if (m == 4 || m == 6 || m == 9 || m == 11) cout << 30;\n    else cout << 31;\n    return 0;\n}"
  },
  {
    "id": "C21",
    "title": "Purchase Discount Calculator",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "7 min",
    "statement": "A store gives a discount based on the purchase amount: 20% for amounts of 5000 or more, 10% for amounts of 2000 or more but below 5000, and 5% for amounts below 2000. Read the amount and print the final amount after discount with exactly two decimal places. Negative amounts are invalid.",
    "input": "One non-negative purchase amount.",
    "output": "Final payable amount with two digits after the decimal point, or `Invalid`.",
    "sampleIn": "2500",
    "sampleOut": "2250.00",
    "explanation": "2500 qualifies for a 10% discount, so the customer pays 2250.",
    "hints": [
      "Choose the discount rate using an if/else-if ladder.",
      "Calculate discount = amount × rate / 100.",
      "Subtract the discount and use fixed with setprecision(2)."
    ],
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    double amount, rate;\n    cin >> amount;\n    if (amount < 0) { cout << \"Invalid\"; return 0; }\n    if (amount >= 5000) rate = 20;\n    else if (amount >= 2000) rate = 10;\n    else rate = 5;\n    double payable = amount - amount * rate / 100;\n    cout << fixed << setprecision(2) << payable;\n    return 0;\n}"
  },
  {
    "id": "C22",
    "title": "Electricity Bill Calculator",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "Calculate an electricity bill using cumulative slabs: the first 100 units cost ₹1.50 per unit, the next 100 units cost ₹2.50 per unit, and every unit above 200 costs ₹4.00. Read a non-negative number of units and print the bill with two decimal places.",
    "input": "One non-negative integer units.",
    "output": "Total bill with two decimal places.",
    "sampleIn": "250",
    "sampleOut": "600.00",
    "explanation": "100×1.50 + 100×2.50 + 50×4.00 = 600.",
    "hints": [
      "The slabs are cumulative, not a single rate applied to every unit.",
      "For up to 100 units, multiply all units by 1.50.",
      "For more than 200, add 150 + 250 and charge the rest at 4.00."
    ],
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    int units; cin >> units;\n    if (units < 0) { cout << \"Invalid\"; return 0; }\n    double bill;\n    if (units <= 100) bill = units * 1.50;\n    else if (units <= 200) bill = 100 * 1.50 + (units - 100) * 2.50;\n    else bill = 100 * 1.50 + 100 * 2.50 + (units - 200) * 4.00;\n    cout << fixed << setprecision(2) << bill;\n    return 0;\n}"
  },
  {
    "id": "C23",
    "title": "ATM Simulation",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "Build a one-transaction ATM menu. Read the starting balance and a choice: 1 to check balance, 2 to withdraw, or 3 to deposit. For choices 2 and 3, also read the transaction amount. Reject negative amounts, withdrawals above the balance, and invalid choices. Print the resulting balance with two decimal places.",
    "input": "Starting balance, choice, and (when needed) transaction amount.",
    "output": "Print the resulting balance or `Invalid`.",
    "sampleIn": "1000 2 250",
    "sampleOut": "750.00",
    "explanation": "The withdrawal is allowed and leaves 1000 − 250 = 750.",
    "hints": [
      "Use if/else or switch to process the menu choice.",
      "For withdrawal, amount must be positive and no greater than balance.",
      "For deposit, amount must be positive; then update the balance."
    ],
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    double balance, amount; int choice;\n    cin >> balance >> choice;\n    if (balance < 0) { cout << \"Invalid\"; return 0; }\n    if (choice == 1) {\n        cout << fixed << setprecision(2) << balance;\n    } else if (choice == 2 || choice == 3) {\n        cin >> amount;\n        if (amount <= 0 || (choice == 2 && amount > balance)) cout << \"Invalid\";\n        else {\n            if (choice == 2) balance -= amount;\n            else balance += amount;\n            cout << fixed << setprecision(2) << balance;\n        }\n    } else cout << \"Invalid\";\n    return 0;\n}"
  },
  {
    "id": "C24",
    "title": "Character Type Classifier",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "6 min",
    "statement": "Read one character and classify it as `Uppercase`, `Lowercase`, `Digit`, or `Special`.",
    "input": "One character ch.",
    "output": "One of the four classifications.",
    "sampleIn": "7",
    "sampleOut": "Digit",
    "explanation": "The character 7 is a numeric digit.",
    "hints": [
      "Check uppercase and lowercase letter ranges.",
      "Then check the digit range '0' to '9'.",
      "Any remaining character is special."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch; cin >> ch;\n    if (ch >= 'A' && ch <= 'Z') cout << \"Uppercase\";\n    else if (ch >= 'a' && ch <= 'z') cout << \"Lowercase\";\n    else if (ch >= '0' && ch <= '9') cout << \"Digit\";\n    else cout << \"Special\";\n    return 0;\n}"
  },
  {
    "id": "C25",
    "title": "Salary Bonus Calculator",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "6 min",
    "statement": "Calculate an employee's annual bonus from their monthly salary and years of service. Give 10% of annual salary for 10 or more years, 5% for 5–9 years, and 2% for fewer than 5 years. Salary and years must be non-negative. Print the bonus with two decimal places.",
    "input": "Monthly salary and completed years of service.",
    "output": "Bonus amount, or `Invalid`.",
    "sampleIn": "30000 6",
    "sampleOut": "18000.00",
    "explanation": "Annual salary is 360000; 5% of it is 18000.",
    "hints": [
      "Annual salary is monthly salary multiplied by 12.",
      "Choose the bonus percentage from years of service.",
      "Multiply annual salary by the percentage divided by 100."
    ],
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    double monthly; int years;\n    cin >> monthly >> years;\n    if (monthly < 0 || years < 0) { cout << \"Invalid\"; return 0; }\n    double rate;\n    if (years >= 10) rate = 10;\n    else if (years >= 5) rate = 5;\n    else rate = 2;\n    cout << fixed << setprecision(2) << monthly * 12 * rate / 100;\n    return 0;\n}"
  },
  {
    "id": "C26",
    "title": "Parking Fee Calculator",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "6 min",
    "statement": "A parking lot charges ₹20 for the first hour and ₹10 for every additional hour. The entered duration is a positive whole number of hours. Calculate the total fee.",
    "input": "One positive integer number of hours.",
    "output": "Total parking fee in rupees, or `Invalid`.",
    "sampleIn": "4",
    "sampleOut": "50",
    "explanation": "The first hour costs 20 and the next three cost 30, giving 50.",
    "hints": [
      "The first hour has a fixed fee of 20.",
      "Only hours after the first are charged at 10 each.",
      "For h hours, add 20 to (h − 1) × 10."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int h; cin >> h;\n    if (h <= 0) cout << \"Invalid\";\n    else cout << 20 + (h - 1) * 10;\n    return 0;\n}"
  },
  {
    "id": "C27",
    "title": "Valid Date Checker",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "Read day, month, and year and determine whether the date is valid in the Gregorian calendar. The year must be positive. Account for leap years in February.",
    "input": "Three integers: day, month, year.",
    "output": "Print `Valid` or `Invalid`.",
    "sampleIn": "29 2 2024",
    "sampleOut": "Valid",
    "explanation": "2024 is a leap year, so February 29 is a valid date.",
    "hints": [
      "Reject invalid month values and non-positive years.",
      "Find the maximum number of days for the given month.",
      "February's maximum depends on the leap-year rule."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int d, m, y; cin >> d >> m >> y;\n    if (y <= 0 || m < 1 || m > 12 || d < 1) { cout << \"Invalid\"; return 0; }\n    int days;\n    if (m == 2) {\n        bool leap = (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0));\n        days = leap ? 29 : 28;\n    } else if (m == 4 || m == 6 || m == 9 || m == 11) days = 30;\n    else days = 31;\n    if (d <= days) cout << \"Valid\";\n    else cout << \"Invalid\";\n    return 0;\n}"
  },
  {
    "id": "C28",
    "title": "Quadrant of a Point",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "6 min",
    "statement": "Read the x and y coordinates of a point. Print `Origin` if both are zero, `X-axis` or `Y-axis` if the point lies on an axis, otherwise print `Quadrant I`, `Quadrant II`, `Quadrant III`, or `Quadrant IV`.",
    "input": "Two integers x and y.",
    "output": "The point's location.",
    "sampleIn": "-3 5",
    "sampleOut": "Quadrant II",
    "explanation": "The x-coordinate is negative and the y-coordinate is positive.",
    "hints": [
      "Check the origin first.",
      "Then check whether either coordinate is zero.",
      "Use the signs of x and y to identify the quadrant."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int x, y; cin >> x >> y;\n    if (x == 0 && y == 0) cout << \"Origin\";\n    else if (y == 0) cout << \"X-axis\";\n    else if (x == 0) cout << \"Y-axis\";\n    else if (x > 0 && y > 0) cout << \"Quadrant I\";\n    else if (x < 0 && y > 0) cout << \"Quadrant II\";\n    else if (x < 0 && y < 0) cout << \"Quadrant III\";\n    else cout << \"Quadrant IV\";\n    return 0;\n}"
  },
  {
    "id": "C29",
    "title": "Middle Value of Three Numbers",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "7 min",
    "statement": "Read three integers and print the middle value (the value that would appear second if the three values were sorted). Repeated values are allowed.",
    "input": "Three integers a, b, and c.",
    "output": "The middle value.",
    "sampleIn": "9 2 5",
    "sampleOut": "5",
    "explanation": "Sorting the values gives 2, 5, 9, so the middle value is 5.",
    "hints": [
      "The middle value is not the maximum or minimum.",
      "If b lies between a and c, b is the answer.",
      "Otherwise test whether a lies between the other two; if not, c is the answer."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c; cin >> a >> b >> c;\n    if ((a >= b && a <= c) || (a <= b && a >= c)) cout << a;\n    else if ((b >= a && b <= c) || (b <= a && b >= c)) cout << b;\n    else cout << c;\n    return 0;\n}"
  },
  {
    "id": "C30",
    "title": "Menu-Driven Area Calculator",
    "topic": "Conditionals",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "Create an area calculator with these choices: 1 for circle, 2 for rectangle, and 3 for triangle. Read the choice followed by the required dimensions. All dimensions must be positive. Use 3.14159 for pi. Print the area with two decimal places; print `Invalid` for an invalid choice or dimensions.",
    "input": "Choice, followed by radius; length and width; or base and height as appropriate.",
    "output": "Area with two decimal places, or `Invalid`.",
    "sampleIn": "2 5 4",
    "sampleOut": "20.00",
    "explanation": "A rectangle with length 5 and width 4 has area 20.",
    "hints": [
      "Use switch for the menu choice.",
      "Circle: pi × radius × radius; rectangle: length × width.",
      "Triangle: base × height ÷ 2; validate dimensions."
    ],
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    int choice; double a, b, area;\n    cin >> choice;\n    switch (choice) {\n        case 1:\n            cin >> a;\n            if (a <= 0) { cout << \"Invalid\"; return 0; }\n            area = 3.14159 * a * a;\n            break;\n        case 2:\n            cin >> a >> b;\n            if (a <= 0 || b <= 0) { cout << \"Invalid\"; return 0; }\n            area = a * b;\n            break;\n        case 3:\n            cin >> a >> b;\n            if (a <= 0 || b <= 0) { cout << \"Invalid\"; return 0; }\n            area = a * b / 2;\n            break;\n        default: cout << \"Invalid\"; return 0;\n    }\n    cout << fixed << setprecision(2) << area;\n    return 0;\n}"
  },
  {
    "id": "L01",
    "title": "Print Hello World N Times",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "3 min",
    "statement": "Read an integer N and print `Hello World` exactly N times, each on a new line. If N is 0, print nothing.",
    "input": "One non-negative integer N.",
    "output": "N lines, each containing `Hello World`.",
    "sampleIn": "3",
    "sampleOut": "Hello World\nHello World\nHello World",
    "explanation": "The loop runs for i = 0, 1, and 2: three iterations.",
    "hints": [
      "A `for` loop is suitable when the number of repetitions is known.",
      "Start a counter at 0.",
      "Continue while the counter is less than N."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"Hello World\\n\";\n    }\n    return 0;\n}"
  },
  {
    "id": "L02",
    "title": "Sum of First N Natural Numbers",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "4 min",
    "statement": "Read a non-negative integer N and calculate the sum of the first N natural numbers (1 + 2 + ... + N). For N = 0, the sum is 0.",
    "input": "One non-negative integer N.",
    "output": "Print the sum.",
    "sampleIn": "5",
    "sampleOut": "15",
    "explanation": "1 + 2 + 3 + 4 + 5 = 15.",
    "hints": [
      "Create a variable `sum` and initialise it to 0.",
      "Loop from 1 through N.",
      "Add the current counter to `sum` each time."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, sum = 0;\n    cin >> n;\n    for (int i = 1; i <= n; i++) sum += i;\n    cout << sum;\n    return 0;\n}"
  },
  {
    "id": "L03",
    "title": "Multiplication Table",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "4 min",
    "statement": "Read an integer N and print its multiplication table from 1 to 10 in the format `N x i = result`.",
    "input": "One integer N.",
    "output": "Ten lines showing the multiplication table.",
    "sampleIn": "4",
    "sampleOut": "4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40",
    "explanation": "Each iteration multiplies 4 by the current value of i.",
    "hints": [
      "The counter should begin at 1.",
      "The loop should stop after 10.",
      "Use `n * i` to calculate each row."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= 10; i++) {\n        cout << n << \" x \" << i << \" = \" << n * i << '\\n';\n    }\n    return 0;\n}"
  },
  {
    "id": "L04",
    "title": "Factorial of a Number",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read a non-negative integer N and calculate N factorial. Remember that 0! = 1.",
    "input": "One non-negative integer N (N <= 12 for this exercise).",
    "output": "Print N factorial.",
    "sampleIn": "5",
    "sampleOut": "120",
    "explanation": "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    "hints": [
      "Start the result at 1, not 0.",
      "Multiply the result by each integer from 1 to N.",
      "For N = 0, the loop does not run and the result remains 1."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    long long fact = 1;\n    cin >> n;\n    for (int i = 1; i <= n; i++) fact *= i;\n    cout << fact;\n    return 0;\n}"
  },
  {
    "id": "L05",
    "title": "Count the Digits",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read an integer and count how many digits it contains. Treat 0 as a one-digit number. The input will not be negative.",
    "input": "One non-negative integer N.",
    "output": "Print the number of digits.",
    "sampleIn": "5082",
    "sampleOut": "4",
    "explanation": "The number 5082 contains four digits.",
    "hints": [
      "Special-case 0 because it has one digit.",
      "Repeatedly divide the number by 10.",
      "Count how many divisions are needed until it becomes 0."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n;\n    cin >> n;\n    if (n == 0) {\n        cout << 1;\n        return 0;\n    }\n    int count = 0;\n    while (n > 0) {\n        count++;\n        n /= 10;\n    }\n    cout << count;\n    return 0;\n}"
  },
  {
    "id": "L06",
    "title": "Print Digits in Reverse Order",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read a non-negative integer and print its digits from right to left, separated by spaces. For example, 123 should produce `3 2 1`. For input 0, print 0.",
    "input": "One non-negative integer N.",
    "output": "Digits in reverse order, separated by spaces.",
    "sampleIn": "4702",
    "sampleOut": "2 0 7 4",
    "explanation": "The last digit is found using `% 10`, then removed using `/ 10`.",
    "hints": [
      "`n % 10` gives the last digit.",
      "After printing it, use `n /= 10`.",
      "Repeat until the number becomes 0."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n;\n    cin >> n;\n    if (n == 0) {\n        cout << 0;\n        return 0;\n    }\n    while (n > 0) {\n        cout << n % 10;\n        n /= 10;\n        if (n > 0) cout << ' ';\n    }\n    return 0;\n}"
  },
  {
    "id": "L07",
    "title": "Reverse a Number",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a non-negative integer and print the number formed by reversing its digits. Leading zeroes in the reversed result are naturally ignored.",
    "input": "One non-negative integer N.",
    "output": "Print the reversed number.",
    "sampleIn": "1204",
    "sampleOut": "4021",
    "explanation": "Taking digits from right to left and appending them gives 4021.",
    "hints": [
      "Create `rev = 0`.",
      "Extract the last digit using `% 10`.",
      "Update the reverse with `rev = rev * 10 + digit`."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n, rev = 0;\n    cin >> n;\n    while (n > 0) {\n        int digit = n % 10;\n        rev = rev * 10 + digit;\n        n /= 10;\n    }\n    cout << rev;\n    return 0;\n}"
  },
  {
    "id": "L08",
    "title": "Sum of Digits",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read a non-negative integer and calculate the sum of its digits. The sum for input 0 is 0.",
    "input": "One non-negative integer N.",
    "output": "Print the sum of its digits.",
    "sampleIn": "583",
    "sampleOut": "16",
    "explanation": "5 + 8 + 3 = 16.",
    "hints": [
      "Extract the last digit with `% 10`.",
      "Add it to a running total.",
      "Remove the last digit with `/ 10`."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, sum = 0;\n    cin >> n;\n    while (n > 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    cout << sum;\n    return 0;\n}"
  },
  {
    "id": "L09",
    "title": "Check Whether a Number Is Prime",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "8 min",
    "statement": "Read an integer N and determine whether it is prime. A prime number is greater than 1 and has exactly two positive factors: 1 and itself.",
    "input": "One integer N.",
    "output": "Print `Prime` or `Not Prime`.",
    "sampleIn": "13",
    "sampleOut": "Prime",
    "explanation": "13 has no divisors other than 1 and 13.",
    "hints": [
      "Numbers less than or equal to 1 are not prime.",
      "Try dividing N by integers starting from 2.",
      "If any divisor divides evenly, the number is not prime."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    bool prime = (n > 1);\n    for (int i = 2; i < n && prime; i++) {\n        if (n % i == 0) prime = false;\n    }\n    if (prime) cout << \"Prime\";\n    else cout << \"Not Prime\";\n    return 0;\n}"
  },
  {
    "id": "L10",
    "title": "Fibonacci Series",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read N and print the first N terms of the Fibonacci series, starting with 0 and 1. Each next term is the sum of the previous two terms. If N is 0, print nothing.",
    "input": "One non-negative integer N (N <=  given practical range).",
    "output": "The first N terms separated by spaces.",
    "sampleIn": "7",
    "sampleOut": "0 1 1 2 3 5 8",
    "explanation": "After 0 and 1, each term is the sum of the two terms before it.",
    "hints": [
      "Keep two variables for the previous two terms.",
      "Print the first term, then update the pair.",
      "Each new term is `a + b`."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    long long a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << ' ';\n        cout << a;\n        long long next = a + b;\n        a = b;\n        b = next;\n    }\n    return 0;\n}"
  },
  {
    "id": "L11",
    "title": "First and Last Digit",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read a non-negative integer and print its first and last digits. Treat 0 as both its first and last digit.",
    "input": "One non-negative integer n.",
    "output": "Print first digit followed by last digit.",
    "sampleIn": "5082",
    "sampleOut": "5 2",
    "explanation": "The first digit of 5082 is 5 and the last digit is 2.",
    "hints": [
      "The last digit is n % 10.",
      "Repeatedly divide a copy of n by 10 until it is a single digit.",
      "That remaining digit is the first digit."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; cin >> n;\n    int last = n % 10;\n    while (n >= 10) n /= 10;\n    cout << n << \" \" << last;\n    return 0;\n}"
  },
  {
    "id": "L12",
    "title": "Count Even and Odd Digits",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a non-negative integer and count how many of its digits are even and how many are odd. For input 0, count one even digit.",
    "input": "One non-negative integer n.",
    "output": "Print even-digit count followed by odd-digit count.",
    "sampleIn": "48271",
    "sampleOut": "3 2",
    "explanation": "Digits 4, 8, and 2 are even; 7 and 1 are odd.",
    "hints": [
      "Extract each digit using `% 10`.",
      "Check whether the digit's remainder after division by 2 is 0.",
      "Remove the processed digit using `/ 10`."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; cin >> n;\n    int even = 0, odd = 0;\n    if (n == 0) even = 1;\n    while (n > 0) {\n        int d = n % 10;\n        if (d % 2 == 0) even++;\n        else odd++;\n        n /= 10;\n    }\n    cout << even << \" \" << odd;\n    return 0;\n}"
  },
  {
    "id": "L13",
    "title": "Product of Digits",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read a non-negative integer and calculate the product of its digits. The product for input 0 is 0.",
    "input": "One non-negative integer n.",
    "output": "Print the product of the digits.",
    "sampleIn": "234",
    "sampleOut": "24",
    "explanation": "2 × 3 × 4 = 24.",
    "hints": [
      "Start the product at 1.",
      "Extract each digit with `% 10` and multiply it into the product.",
      "Handle input 0 separately because the loop would otherwise not run."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; cin >> n;\n    if (n == 0) { cout << 0; return 0; }\n    long long product = 1;\n    while (n > 0) {\n        product *= n % 10;\n        n /= 10;\n    }\n    cout << product;\n    return 0;\n}"
  },
  {
    "id": "L14",
    "title": "Palindrome Number",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a non-negative integer and check whether it reads the same forward and backward.",
    "input": "One non-negative integer n.",
    "output": "Print `Palindrome` or `Not Palindrome`.",
    "sampleIn": "1221",
    "sampleOut": "Palindrome",
    "explanation": "Reversing 1221 gives 1221, which is unchanged.",
    "hints": [
      "Save the original number before modifying it.",
      "Build its reverse one digit at a time.",
      "Compare the reversed value with the original."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n, original, rev = 0;\n    cin >> n; original = n;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    if (rev == original) cout << \"Palindrome\";\n    else cout << \"Not Palindrome\";\n    return 0;\n}"
  },
  {
    "id": "L15",
    "title": "Find All Factors",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "6 min",
    "statement": "Read a positive integer N and print all its positive factors in increasing order, separated by spaces.",
    "input": "One positive integer N.",
    "output": "All positive factors of N in increasing order.",
    "sampleIn": "12",
    "sampleOut": "1 2 3 4 6 12",
    "explanation": "Each listed number divides 12 without leaving a remainder.",
    "hints": [
      "Try every integer from 1 through N.",
      "A number is a factor when N % i equals 0.",
      "Print the factor whenever the condition is true."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            if (i > 1) cout << \" \";\n            cout << i;\n        }\n    }\n    return 0;\n}"
  },
  {
    "id": "L16",
    "title": "Sum of Proper Factors",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a positive integer N and calculate the sum of its proper factors. Proper factors are positive factors smaller than N. The number 1 has a proper-factor sum of 0.",
    "input": "One positive integer N.",
    "output": "Print the sum of proper factors.",
    "sampleIn": "12",
    "sampleOut": "16",
    "explanation": "The proper factors are 1, 2, 3, 4, and 6; their sum is 16.",
    "hints": [
      "Do not include N itself.",
      "Loop from 1 up to N - 1.",
      "Add a value when it divides N evenly."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, sum = 0; cin >> n;\n    for (int i = 1; i < n; i++)\n        if (n % i == 0) sum += i;\n    cout << sum;\n    return 0;\n}"
  },
  {
    "id": "L17",
    "title": "HCF of Two Numbers",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read two non-negative integers (not both zero) and find their highest common factor (HCF), also called greatest common divisor.",
    "input": "Two non-negative integers a and b, not both zero.",
    "output": "Print their HCF.",
    "sampleIn": "24 18",
    "sampleOut": "6",
    "explanation": "6 is the largest number that divides both 24 and 18.",
    "hints": [
      "A common factor divides both numbers.",
      "Try possible factors from 1 up to the smaller number.",
      "Keep the greatest factor that divides both."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b; cin >> a >> b;\n    int hcf = 1;\n    int limit = (a < b ? a : b);\n    for (int i = 1; i <= limit; i++)\n        if (a % i == 0 && b % i == 0) hcf = i;\n    cout << hcf;\n    return 0;\n}"
  },
  {
    "id": "L18",
    "title": "Perfect Square Checker",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "Read a non-negative integer and determine whether it is a perfect square. A perfect square is the square of an integer.",
    "input": "One non-negative integer n.",
    "output": "Print `Perfect Square` or `Not a Perfect Square`.",
    "sampleIn": "81",
    "sampleOut": "Perfect Square",
    "explanation": "9 × 9 = 81.",
    "hints": [
      "Try integer values starting from 0.",
      "Square the current value and compare it with n.",
      "Stop when the square becomes greater than or equal to n."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; cin >> n;\n    bool found = false;\n    for (long long i = 0; i * i <= n; i++) {\n        if (i * i == n) { found = true; break; }\n    }\n    if (found) cout << \"Perfect Square\";\n    else cout << \"Not a Perfect Square\";\n    return 0;\n}"
  },
  {
    "id": "L19",
    "title": "Prime Factors",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "8 min",
    "statement": "Read an integer N greater than 1 and print its prime factors, including repeated factors, in non-decreasing order.",
    "input": "One integer N greater than 1.",
    "output": "Prime factors separated by spaces.",
    "sampleIn": "60",
    "sampleOut": "2 2 3 5",
    "explanation": "60 = 2 × 2 × 3 × 5.",
    "hints": [
      "Start testing divisors from 2.",
      "When a divisor divides N, print it and divide N by it.",
      "Keep testing the same divisor until it no longer divides N."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    bool first = true;\n    for (int d = 2; d <= n; d++) {\n        while (n % d == 0) {\n            if (!first) cout << \" \";\n            cout << d;\n            first = false;\n            n /= d;\n        }\n    }\n    return 0;\n}"
  },
  {
    "id": "L20",
    "title": "Harshad Number",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "A Harshad number is a positive integer that is divisible by the sum of its digits. Read N and determine whether it is a Harshad number.",
    "input": "One positive integer N.",
    "output": "Print `Harshad` or `Not Harshad`.",
    "sampleIn": "18",
    "sampleOut": "Harshad",
    "explanation": "The digit sum is 1 + 8 = 9, and 18 is divisible by 9.",
    "hints": [
      "Calculate the sum of the digits using a loop.",
      "Divide N by the digit sum and check the remainder.",
      "The input is positive, so the digit sum is non-zero."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, temp, sum = 0; cin >> n;\n    temp = n;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    if (n > 0 && n % sum == 0) cout << \"Harshad\";\n    else cout << \"Not Harshad\";\n    return 0;\n}"
  },
  {
    "id": "L21",
    "title": "Abundant Number",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "An abundant number is a positive integer whose proper-factor sum is greater than the number itself. Read N and classify it as `Abundant` or `Not Abundant`.",
    "input": "One positive integer N.",
    "output": "Print the classification.",
    "sampleIn": "12",
    "sampleOut": "Abundant",
    "explanation": "The proper factors of 12 sum to 16, which is greater than 12.",
    "hints": [
      "Find factors smaller than N.",
      "Add only proper factors, not N itself.",
      "Compare the sum with N."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, sum = 0; cin >> n;\n    for (int i = 1; i < n; i++)\n        if (n % i == 0) sum += i;\n    if (sum > n) cout << \"Abundant\";\n    else cout << \"Not Abundant\";\n    return 0;\n}"
  },
  {
    "id": "L22",
    "title": "Neon Number",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "7 min",
    "statement": "A Neon number is a number whose square's digit sum equals the original number. Read a non-negative integer and check whether it is Neon.",
    "input": "One non-negative integer N.",
    "output": "Print `Neon` or `Not Neon`.",
    "sampleIn": "9",
    "sampleOut": "Neon",
    "explanation": "9² = 81 and 8 + 1 = 9.",
    "hints": [
      "First calculate the square of N.",
      "Find the sum of the square's digits using `% 10` and `/ 10`.",
      "Compare the sum with the original number."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    int square = n * n, temp = square, sum = 0;\n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    if (sum == n) cout << \"Neon\";\n    else cout << \"Not Neon\";\n    return 0;\n}"
  },
  {
    "id": "L23",
    "title": "Number with Exactly X Divisors",
    "topic": "Loops",
    "difficulty": "Intermediate",
    "time": "8 min",
    "statement": "Read two positive integers N and X. Count the positive divisors of N and check whether the count is exactly X.",
    "input": "Two positive integers N and X.",
    "output": "Print `Yes` if N has exactly X positive divisors; otherwise print `No`.",
    "sampleIn": "12 6",
    "sampleOut": "Yes",
    "explanation": "The positive divisors of 12 are 1, 2, 3, 4, 6, and 12: six divisors.",
    "hints": [
      "Loop from 1 through N.",
      "Increase a counter whenever N % i equals 0.",
      "Compare the final counter with X."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, x, count = 0; cin >> n >> x;\n    for (int i = 1; i <= n; i++)\n        if (n % i == 0) count++;\n    if (count == x) cout << \"Yes\";\n    else cout << \"No\";\n    return 0;\n}"
  },
  {
    "id": "L24",
    "title": "Automorphic Number",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "An Automorphic number is a number whose square ends with the number itself. Read a non-negative integer and determine whether it is Automorphic.",
    "input": "One non-negative integer N (small enough that its square fits in a 64-bit integer).",
    "output": "Print `Automorphic` or `Not Automorphic`.",
    "sampleIn": "25",
    "sampleOut": "Automorphic",
    "explanation": "25² = 625, which ends in 25.",
    "hints": [
      "Calculate N × N.",
      "Build a power of 10 with one digit place for every digit of N.",
      "Check whether square % that power equals N."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; cin >> n;\n    long long square = n * n, place = 10, temp = n;\n    while (temp >= 10) { place *= 10; temp /= 10; }\n    if (square % place == n) cout << \"Automorphic\";\n    else cout << \"Not Automorphic\";\n    return 0;\n}"
  },
  {
    "id": "L25",
    "title": "Strong Number",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "9 min",
    "statement": "A Strong number is a number equal to the sum of the factorials of its digits. Read a non-negative integer and check whether it is Strong. Use 0! = 1.",
    "input": "One non-negative integer N.",
    "output": "Print `Strong` or `Not Strong`.",
    "sampleIn": "145",
    "sampleOut": "Strong",
    "explanation": "1! + 4! + 5! = 1 + 24 + 120 = 145.",
    "hints": [
      "Extract each digit using `% 10`.",
      "Calculate that digit's factorial with an inner loop.",
      "Add each digit factorial and compare the total with the original number."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, temp, sum = 0; cin >> n;\n    temp = n;\n    do {\n        int digit = temp % 10, fact = 1;\n        for (int i = 1; i <= digit; i++) fact *= i;\n        sum += fact;\n        temp /= 10;\n    } while (temp > 0);\n    if (sum == n) cout << \"Strong\";\n    else cout << \"Not Strong\";\n    return 0;\n}"
  },
  {
    "id": "L26",
    "title": "Armstrong Number",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "10 min",
    "statement": "An Armstrong number is a non-negative integer equal to the sum of each of its digits raised to the number of digits. Read N and determine whether it is Armstrong. Use loops to calculate powers; do not use pow().",
    "input": "One non-negative integer N.",
    "output": "Print `Armstrong` or `Not Armstrong`.",
    "sampleIn": "153",
    "sampleOut": "Armstrong",
    "explanation": "153 has three digits and 1³ + 5³ + 3³ = 153.",
    "hints": [
      "Count the digits first.",
      "For each digit, multiply it by itself the required number of times.",
      "Add those powers and compare with the original number."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, temp, digits = 0, sum = 0; cin >> n;\n    temp = n;\n    do { digits++; temp /= 10; } while (temp > 0);\n    temp = n;\n    do {\n        int d = temp % 10, power = 1;\n        for (int i = 0; i < digits; i++) power *= d;\n        sum += power;\n        temp /= 10;\n    } while (temp > 0);\n    if (sum == n) cout << \"Armstrong\";\n    else cout << \"Not Armstrong\";\n    return 0;\n}"
  },
  {
    "id": "L27",
    "title": "Guess the Number Game",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "Simulate a number-guessing game. The first input is the secret number. Then read guesses until the guess matches the secret. After a wrong guess, print `Too Low` or `Too High`. When correct, print `Correct`. Use a do-while loop.",
    "input": "Secret number followed by one or more guesses. The final guess must equal the secret.",
    "output": "One hint for each incorrect guess, followed by `Correct`.",
    "sampleIn": "7 3 9 7",
    "sampleOut": "Too Low\nToo High\nCorrect",
    "explanation": "3 is below 7, 9 is above 7, and the final guess is correct.",
    "hints": [
      "A do-while loop executes at least once.",
      "Compare each guess with the secret number.",
      "Continue while the guess is not equal to the secret."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int secret, guess; cin >> secret;\n    do {\n        cin >> guess;\n        if (guess < secret) cout << \"Too Low\\n\";\n        else if (guess > secret) cout << \"Too High\\n\";\n    } while (guess != secret);\n    cout << \"Correct\";\n    return 0;\n}"
  },
  {
    "id": "L28",
    "title": "Menu-Driven Calculator",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "10 min",
    "statement": "Build a calculator that repeatedly reads a menu choice: 1 Add, 2 Subtract, 3 Multiply, 4 Divide, 5 Exit. For choices 1–4, read two numbers and print the result. Division by zero prints `Invalid`. Continue until choice 5 is entered. Use do-while and switch.",
    "input": "A sequence of menu choices. For choices 1–4, two operands follow. Choice 5 ends input.",
    "output": "Print each operation result on its own line. Print `Invalid` for division by zero. Do not print anything for choice 5.",
    "sampleIn": "1 4 3 4 4 4 5",
    "sampleOut": "7\n1",
    "explanation": "The first choice adds 4 and 3; the next choice divides 4 by 4.",
    "hints": [
      "Put the menu processing inside a do-while loop.",
      "Use switch to handle the five choices.",
      "Stop the loop when the choice is 5."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int choice;\n    do {\n        cin >> choice;\n        double a, b;\n        switch (choice) {\n            case 1: cin >> a >> b; cout << a + b << '\\n'; break;\n            case 2: cin >> a >> b; cout << a - b << '\\n'; break;\n            case 3: cin >> a >> b; cout << a * b << '\\n'; break;\n            case 4:\n                cin >> a >> b;\n                if (b == 0) cout << \"Invalid\\n\";\n                else cout << a / b << '\\n';\n                break;\n            case 5: break;\n            default: cout << \"Invalid\\n\";\n        }\n    } while (choice != 5);\n    return 0;\n}"
  },
  {
    "id": "L29",
    "title": "Sum Fibonacci Terms at Even Indices",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "9 min",
    "statement": "Generate the first N Fibonacci terms using zero-based indexing (index 0 is 0, index 1 is 1). Calculate the sum of terms whose indices are even: 0, 2, 4, and so on.",
    "input": "One non-negative integer N (N <= 40).",
    "output": "Print the sum of Fibonacci terms at even indices among the first N terms.",
    "sampleIn": "6",
    "sampleOut": "4",
    "explanation": "The first six terms are 0, 1, 1, 2, 3, 5. Even-indexed terms are 0, 1, and 3; their sum is 4.",
    "hints": [
      "Track the current index as the loop counter.",
      "Add the current Fibonacci value when the index is even.",
      "Update the two previous Fibonacci values after each term."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    long long a = 0, b = 1, sum = 0;\n    for (int i = 0; i < n; i++) {\n        if (i % 2 == 0) sum += a;\n        long long next = a + b;\n        a = b;\n        b = next;\n    }\n    cout << sum;\n    return 0;\n}"
  },
  {
    "id": "L30",
    "title": "Perfect Number",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "8 min",
    "statement": "A perfect number is a positive integer equal to the sum of its proper factors. Read N and determine whether it is perfect.",
    "input": "One positive integer N.",
    "output": "Print `Perfect` or `Not Perfect`.",
    "sampleIn": "28",
    "sampleOut": "Perfect",
    "explanation": "The proper factors of 28 are 1, 2, 4, 7, and 14; their sum is 28.",
    "hints": [
      "Find only factors smaller than N.",
      "Add all proper factors into a sum.",
      "Compare the sum with N."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, sum = 0; cin >> n;\n    for (int i = 1; i < n; i++)\n        if (n % i == 0) sum += i;\n    if (sum == n) cout << \"Perfect\";\n    else cout << \"Not Perfect\";\n    return 0;\n}"
  },
  {
    "id": "L31",
    "title": "GCD and LCM",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "9 min",
    "statement": "Read two positive integers and calculate their GCD and LCM. Use a loop to find the GCD. LCM is calculated using (a / GCD) × b.",
    "input": "Two positive integers a and b.",
    "output": "Print GCD followed by LCM.",
    "sampleIn": "12 18",
    "sampleOut": "6 36",
    "explanation": "The GCD is 6; LCM = (12 / 6) × 18 = 36.",
    "hints": [
      "Find the GCD by checking common factors or using repeated remainder steps.",
      "Use the formula LCM = (a / GCD) × b.",
      "Print both values."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long a, b; cin >> a >> b;\n    long long x = a, y = b;\n    while (y != 0) {\n        long long r = x % y;\n        x = y;\n        y = r;\n    }\n    long long gcd = x;\n    long long lcm = (a / gcd) * b;\n    cout << gcd << \" \" << lcm;\n    return 0;\n}"
  },
  {
    "id": "L32",
    "title": "Prime Palindrome",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "9 min",
    "statement": "Read a positive integer and check whether it is both prime and a palindrome.",
    "input": "One positive integer N.",
    "output": "Print `Prime Palindrome` or `Not Prime Palindrome`.",
    "sampleIn": "131",
    "sampleOut": "Prime Palindrome",
    "explanation": "131 is prime and its reverse is also 131.",
    "hints": [
      "First check whether the number is prime.",
      "Then reverse its digits using a loop.",
      "Both conditions must be true."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    bool prime = n > 1;\n    for (int i = 2; i < n && prime; i++)\n        if (n % i == 0) prime = false;\n    int temp = n, rev = 0;\n    while (temp > 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    if (prime && rev == n) cout << \"Prime Palindrome\";\n    else cout << \"Not Prime Palindrome\";\n    return 0;\n}"
  },
  {
    "id": "L33",
    "title": "Frequency of a Given Digit",
    "topic": "Loops",
    "difficulty": "Challenge",
    "time": "7 min",
    "statement": "Read a non-negative integer N and a digit D (0–9). Count how many times D appears in N. Treat N = 0 as containing one zero digit.",
    "input": "Integer N and digit D.",
    "output": "Print the frequency of D in N.",
    "sampleIn": "10020 0",
    "sampleOut": "3",
    "explanation": "The digit 0 appears three times in 10020.",
    "hints": [
      "Extract digits one at a time using `% 10`.",
      "Compare each extracted digit with D.",
      "Handle N = 0 as a special one-digit number."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long n; int d, count = 0;\n    cin >> n >> d;\n    if (n == 0) count = (d == 0);\n    while (n > 0) {\n        if (n % 10 == d) count++;\n        n /= 10;\n    }\n    cout << count;\n    return 0;\n}"
  },
  {
    "id": "L34",
    "title": "Even and Odd Sums in a Range",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "6 min",
    "statement": "Read two integers L and R (L <= R). Calculate the sum of all even integers and the sum of all odd integers in the inclusive range [L, R].",
    "input": "Two integers L and R, with L <= R.",
    "output": "Print even sum followed by odd sum.",
    "sampleIn": "1 5",
    "sampleOut": "6 9",
    "explanation": "Even numbers are 2 and 4 (sum 6); odd numbers are 1, 3, and 5 (sum 9).",
    "hints": [
      "Loop from L through R, including both endpoints.",
      "Check each number's remainder after division by 2.",
      "Add it to the matching running total."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    int l, r; long long evenSum = 0, oddSum = 0;\n    cin >> l >> r;\n    for (int i = l; i <= r; i++) {\n        if (i % 2 == 0) evenSum += i;\n        else oddSum += i;\n    }\n    cout << evenSum << \" \" << oddSum;\n    return 0;\n}"
  },
  {
    "id": "L35",
    "title": "Calculate Power Without pow()",
    "topic": "Loops",
    "difficulty": "Beginner",
    "time": "5 min",
    "statement": "Read a base and a non-negative integer exponent. Calculate base raised to exponent using repeated multiplication. Do not use the `pow()` function. Any base raised to 0 is 1.",
    "input": "An integer base and a non-negative integer exponent.",
    "output": "Print the result.",
    "sampleIn": "3 4",
    "sampleOut": "81",
    "explanation": "3 × 3 × 3 × 3 = 81.",
    "hints": [
      "Start the result at 1.",
      "Multiply the result by the base exactly exponent times.",
      "If exponent is 0, the loop runs zero times and the answer stays 1."
    ],
    "solution": "#include <iostream>\nusing namespace std;\nint main() {\n    long long base, result = 1;\n    int exponent;\n    cin >> base >> exponent;\n    for (int i = 0; i < exponent; i++) result *= base;\n    cout << result;\n    return 0;\n}"
  }
];
