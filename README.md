# Copy to Clipboard with Tooltip Feedback

A lightweight and dependency-free JavaScript utility that lets users **copy text to clipboard** with instant visual feedback via a tooltip.

![Demo](https://img.shields.io/badge/VanillaJS-100%25-green)
![License](https://img.shields.io/github/license/khdxsohee/copy-to-clipboard-tooltip)

## 🚀 Features

- ✅ No libraries or frameworks required (pure JavaScript)
- ✅ Tooltip feedback on successful copy
- ✅ Customizable and reusable
- ✅ Works on any element with a `data-copy` attribute

## 📦 Usage

### 1. Add the script to your HTML file

```html
<script src="copyToClipboard.js"></script>
```


### 2. Add buttons or elements with the data-copy attribute
```
<button data-copy="khdxsohee@example.com">Copy Email</button>
<button data-copy="WELCOME25">Copy Coupon</button>
```


### 3. (Optional) Add CSS to style the tooltip
```
<style>
.copy-tooltip {
  position: absolute;
  background-color: #222;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  top: -30px;
  white-space: nowrap;
  z-index: 10;
  animation: fadeInOut 2s;
}
@keyframes fadeInOut {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
```


## 🔧 How It Works
- When a button is clicked, the script reads the value from data-copy.

- It copies that value to clipboard using navigator.clipboard.writeText.

- Then shows a temporary tooltip with message "Copied!".

## 📁 File Structure

copy-to-clipboard-tooltip/
- ├── copyToClipboard.js
- └── README.md


## 👤 Author
[GitHub: @khdxsohee](https://github.com/khdxsohee)

## 📄 License
This project is licensed under the MIT License - feel free to use it in personal or commercial projects.

---
  ### ✨ If you found this helpful, don’t forget to give it a ⭐ on GitHub!
