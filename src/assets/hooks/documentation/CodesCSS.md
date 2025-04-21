### Códigos Tailwind CSS
<a id="CSS1"></a>

```css
/* código dentro de main.css tras el @import */
@layer components{
    .cabeceras{
      @apply bg-blue-400 text-3xl text-center text-yellow-200 dark:bg-gray-800 dark:text-white m-2 p-2 rounded-ee-full rounded-es-full;
      margin-left: 20%;
      margin-right: 20%;
    }
  }
```
<a id="CSS2"></a>

```css
.contenidoUseState{
    @apply flex justify-center items-center gap-4 bg-blue-400 text-yellow-300 dark:text-white text-2xl dark:bg-gray-500;
}
```
<a id="CSS3"></a>

```css
.botonesUS{
    @apply cursor-pointer bg-blue-300 dark:bg-gray-400 dark:text-purple-900 rounded-full p-2 m-2 hover:bg-[#8ea6b6] transition duration-300 ease-in-out dark:transition-all;
}
```
<a id="CSS4"></a>

```css
.subcabeceras{
    @apply bg-blue-400 text-3xl text-center text-yellow-200 dark:bg-gray-800 dark:text-white m-2 p-2 rounded-ee-full rounded-es-full;
    margin-left: 30%;
    margin-right: 30%;
}
```
<a id="CSS5"></a>

```css
.inputs{
    @apply pl-1 bg-yellow-300/25 border-blue-400 border-2 focus:border-blue-700;
}
```
