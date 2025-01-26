---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Python Editor Test"
  text: "A python editor runner test"
  tagline: My great project tagline

---
```python:line-numbers
def fib(n):
    if n < 0:
        raise ValueError("must be non-negative")
    elif n == 0 or n == 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)

print(fib(10))
```

<Editor id="i-should-be-unique" />

