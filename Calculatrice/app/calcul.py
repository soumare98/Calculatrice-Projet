def evaluate_npi(donnee: str) -> float:
    stack = []
    elements = donnee.split()
    
    for e in elements:
        if e.isdigit():
            stack.append(float(token))
        else:
            b = stack.pop()
            a = stack.pop()
            
            if e == '+':
                stack.append(a + b)
            elif e == '-':
                stack.append(a - b)
            elif e == '*':
                stack.append(a * b)
            elif e == '/':
                stack.append(a / b)
            else:
                raise ValueError("Opérateur non valide")
    
    return stack.pop()
