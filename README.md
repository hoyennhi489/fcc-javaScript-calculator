# JavaScript Calculator  

This is a JavaScript Calculator built with React, following FreeCodeCamp's project requirements.  

## Project Requirements  

**User Story #1**: The calculator should contain a clickable element for the `=` (equal sign) with an `id="equals"`.  

**User Story #2**: The calculator should contain 10 clickable elements for numbers 0–9 with the following `id`s: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.  

**User Story #3**: The calculator should contain 4 clickable elements for the primary operators (+, -, *, /) with the following `id`s: `id="add"`, `id="subtract"`, `id="multiply"`, and `id="divide"`.  

**User Story #4**: The calculator should contain a clickable element for the decimal point (`.`) with an `id="decimal"`.  

**User Story #5**: The calculator should contain a clickable element to clear the input with an `id="clear"`.  

**User Story #6**: The calculator should display values in an element with an `id="display"`.  

**User Story #7**: Pressing the clear button should reset the calculator to its initial state, showing `0` in the element with an `id="display"`.  

**User Story #8**: As numbers are inputted, they should appear in the element with an `id="display"`.  

**User Story #9**: The calculator should support chained operations of any length, and pressing `=` should show the correct result in the element with an `id="display"`.  

**User Story #10**: Numbers should not begin with multiple zeros.  

**User Story #11**: When the decimal point is clicked, it should append to the current value; multiple decimal points in one number should be ignored.  

**User Story #12**: The calculator should handle decimal point operations (+, -, *, /) correctly.  

**User Story #13**: If two or more operators are entered consecutively, the last operator should be used (except for the negative sign). For example:  
- `5 + * 7 =` → Result: `35` (i.e., `5 * 7`)  
- `5 * - 5 =` → Result: `-25` (i.e., `5 * (-5)`)  

**User Story #14**: Pressing an operator after `=` should start a new calculation using the result of the previous evaluation.  

**User Story #15**: The calculator should handle rounding with reasonable precision (at least 4 decimal places for operations like `2 / 7`).  

### Calculator Logic  
There are two main calculator input logics: **immediate execution logic** and **formula logic**. This project follows **formula logic** (observing operator precedence). Either logic is acceptable as long as calculations are consistent with other production calculators.  

**Example:** `3 + 5 * 6 - 2 / 4 =`  
- **Immediate Execution Logic:** `11.5`  
- **Formula/Expression Logic:** `32.5`  