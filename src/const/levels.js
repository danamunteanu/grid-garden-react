export const levels = [
  {
    name: 'grid-column-start 1',
    instructions: '<p>Welcome to the <strong>Eridani Wars</strong> world! Together we will learn CSS grid in order to defend your people!</p> <p>Put the <strong>Blue Halo</strong> only over the places Plati heroes are by using the <code class="help">grid-column-start</code> property.</p><p>For example, <code>grid-column-start: 2;</code> will protect the area starting at the 2nd vertical grid line. Let`s try! <img src="http://code.org/api/hour/begin_codepip_grid.png"></p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '2'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-column-start 4',
    instructions: '<p>This is war! Humans need defense, too!</p><p> Use <code class="help">grid-column-start</code> to put the <strong>Orange Halo</strong> over them. This time, the little hero is on the 4th vertical grid line.</p>',
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '4'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#orange-halo {\n',
    after: '}'
  },
  {
    name: 'grid-column-end 1',
    instructions: '<p>When <code class="help">grid-column-start</code> is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the <code class="help">grid-column-end</code> property.</p><p>Using <code class="help">grid-column-end</code>, defend all of your Plati heroes. We don\'t want to waste this ability and protect more than necessary! Note that the halo needs to start at the 1st vertical grid line and end at the 4th.</p>',
    board: 'c',
    classes: {'#halos > *, #characters > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '4'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column-start: 1;\n',
    after: '}'
  },
  {
    name: 'grid-column-end 2',
    instructions: '<p>When pairing <code class="help">grid-column-start</code> and <code class="help">grid-column-end</code>, you might assume that the end value has to be greater than the start value. But this turns out not the case!</p><p>Try setting <code class="help">grid-column-end</code> to a value less than 5 to protect your characters.</p>',
    board: 'c',
    classes: {'#halos > *, #characters > *': 'grid-column-start-5'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '2'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column-start: 5;\n',
    after: '}'
  },
  {
    name: 'grid-column-end 3',
    instructions: '<p>If you want to count grid lines from the right instead of the left, you can give <code class="help">grid-column-start</code> and <code class="help">grid-column-end</code> negative values. For example, you can set it to -1 to specify the first grid line from the right.</p><p>Try setting <code class="help">grid-column-end</code> to a negative value.</p>',
    board: 'c',
    classes: {'#halos > *, #characters > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': '-2'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column-start: 1;\n',
    after: '}'
  },
  {
    name: 'grid-column-start 3',
    instructions: '<p>Now try setting <code class="help">grid-column-start</code> to a negative value.</p>',
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column-start': '-3'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#orange-halo {\n',
    after: '}'
  },
  {
    name: 'grid-column-end 4',
    instructions: '<p>Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the <code>span</code> keyword. Be careful, <code>span</code> only works with positive values.</p><p>For example, put the <strong>Blue Halo</strong> over these Plati heroes with the rule <code>grid-column-end: span 2;</code>.</p>',
    board: 'c',
    classes: {'#halos > *, #characters > *': 'grid-column-start-2'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': 'span 2'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column-start: 2;\n',
    after: '}'
  },
  {
    name: 'grid-column-end 5',
    instructions: '<p>Try using <code class="help">grid-column-end</code> with the <code>span</code> keyword again to defend your people.</p>',
    board: 'c',
    classes: {'#halos > *, #characters > *': 'grid-column-start-1'},
    selector: '> :nth-child(1)',
    style: {'grid-column-end': 'span 5'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column-start: 1;\n',
    after: '}'
  },
  {
    name: 'grid-column-start 4',
    instructions: '<p>You can also use the <code>span</code> keyword with <code class="help">grid-column-start</code> to set your item\'s width relative to the end position.</p>',
    board: 'c',
    classes: {'#halos > *, #characters > *': 'grid-column-end-6'},
    selector: '> :nth-child(1)',
    style: {'grid-column-start': 'span 3'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '  grid-column-end: 6;\n}'
  },
  {
    name: 'grid-column 1',
    instructions: '<p>Typing both <code class="help">grid-column-start</code> and <code class="help">grid-column-end</code> every time can get tiring. Fortunately, <code class="help">grid-column</code> is a shorthand property that can accept both values at once, separated by a slash.</p><p>For example, <code>grid-column: 2 / 4;</code> will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.</p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '4 / 6'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-column 2',
    instructions: '<p>Try using <code class="help">grid-column</code> to protect these Plati. The <code>span</code> keyword also works with this shorthand property so give it a try!</p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2 / 5'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-row-start 1',
    instructions: '<p>One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. <code class="help">grid-row-start</code> works much like <code class="help">grid-column-start</code> except along the vertical axis.</p><p>Use <code class="help">grid-row-start</code> to put the <strong>Blue Halo</strong> over this hero.</p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-row-start': '3'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-row-start 2',
    instructions: '<p>Now give the shorthand property <code class="help">grid-row</code> a try.</p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-row': '3 / 6'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-column-row 1',
    instructions: '<p>Use <code class="help">grid-column</code> and <code class="help">grid-row</code> at the same time to set position in both dimensions.</p>',
    board: 'w',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2', 'grid-row': '5'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#orange-halo {\n',
    after: '}'
  },
  {
    name: 'grid-column-row 2',
    instructions: '<p>You can also use <code class="help">grid-column</code> and <code class="help">grid-row</code> together to span larger areas within the grid. Give it a try!</p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-column': '2 / 6', 'grid-row': '1 / 6'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-area 1',
    instructions: '<p>If typing out both <code class="help">grid-column</code> and <code class="help">grid-row</code> is too much for you, there\'s yet another shorthand for that. <code class="help">grid-area</code> accepts four values separated by slashes: <code class="help">grid-row-start</code>, <code class="help">grid-column-start</code>, <code class="help">grid-row-end</code>, followed by <code class="help">grid-column-end</code>.</p><p>One example of this would be <code>grid-area: 1 / 1 / 3 / 6;</code>.</p>',
    board: 'c',
    selector: '> :nth-child(1)',
    style: {'grid-area': '1 / 2 / 4 / 6'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n',
    after: '}'
  },
  {
    name: 'grid-area 2',
    instructions: '<p>How about multiple items? You can overlap them without any trouble. Use <code class="help">grid-area</code> to define a second area that covers all of the unprotected Plati heroes.</p>',
    board: 'cc',
    classes: {'#halos > :nth-child(2), #characters > :nth-child(2)': 'grid-column-4'},
    selector: '> :nth-child(1)',
    style: {'grid-area': '2 / 3 / 5 / 6'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#blue-halo-2 {\n',
    after: '}'
  },
  {
    name: 'order 1',
    instructions: '<p>If grid items aren\'t explicitly placed with <code class="help">grid-area</code>, <code class="help">grid-column</code>, <code class="help">grid-row</code>, etc., they are automatically placed according to their order in the source code. We can override this using the <code class="help">order</code> property, which is one of the advantages of grid over table-based layout.</p><p>By default, all grid items have an <code class="help">order</code> of 0, but this can be set to any positive or negative value, similar to <code>z-index</code>.</p><p>Right now, the Human hero should be placed in the second column under the <strong>Orange Halo</strong> and Plati heroes in the rest of the places from 1st line, under the <strong>Blue Halo</strong>. Change the <code class="help">order</code> value of the halo to fix this!</p>',
    board: 'cwccc',
    selector: '> :nth-child(2)',
    style: {'order': '2'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.blue-halo {\n  order: 0;\n}\n\n#orange-halo {\n',
    after: '}'
  },
  {
    name: 'order 2',
    instructions: '<p>Now the <strong>Orange Halos</strong> and <strong>Blue Halos</strong> are alternating. Set the <code class="help">order</code> to put the right ones over the heroes.</p>',
    board: 'wcwcwcwcwc',
    selector: '> :nth-child(odd)',
    style: {'order': '-1'},
    before: '#air {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n.blue-halo {\n  order: 0;\n}\n\n.orange-halo {\n',
    after: '}'
  },
  {
    name: 'grid-template-columns 1',
    instructions: '<p>Up to this point, you\'ve had your battlefield set up as a grid with five columns, each 20% of the full width, and five rows, each 20% of the full height.</p><p>This was done with the rules <code>grid-template-columns: 20% 20% 20% 20% 20%;</code> and <code>grid-template-rows: 20% 20% 20% 20% 20%;</code></p><p>But you can set the grid up however you like. Give <code class="help">grid-template-columns</code> a new value to defend your Plati. You\'ll want to set the width of the 1st column to be 50%.',
    board: 'c',
    style: {'grid-template-columns': '50% 50%'},
    before: '#soil {\n  display: grid;\n',
    after: '  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column: 1;\n  grid-row: 1;\n}'
  },
  {
    name: 'grid-template-columns 2',
    instructions: '<p>Specifying a bunch of columns with identical widths can get tedious. Luckily there\'s a <code class="help">repeat</code> function to help with that.</p><p>For example, we previously defined five 20% columns with the rule <code>grid-template-columns: 20% 20% 20% 20% 20%;</code>. This can be simplified as <code>grid-template-columns: repeat(5, 20%);</code></p><p>Using <code class="help">grid-template-columns</code> with the <code>repeat</code> function, create eight columns each with 12.5% width. This way you won\'t overprotect your people.</p>',
    board: 'c',
    classes: {'#characters': 'grid-template-columns-repeat-8-12'},
    style: {'grid-template-columns': 'repeat(8, 12.5%)'},
    before: '#soil {\n  display: grid;\n',
    after: '  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-column: 1;\n  grid-row: 1;\n}'
  },
  {
    name: 'grid-template-columns 4',
    instructions: '<p><code class="help">grid-template-columns</code> doesn\'t just accept values in percentages, but also length units like pixels and ems. You can even mix different units together.</p><p>Here, set three columns to <code>100px</code>, <code>3em</code>, and <code>40%</code> respectively.</p>',
    board: 'cwc',
    classes: {'#characters': 'grid-template-columns-100px-3em-40p'},
    style: {'grid-template-columns': '100px 3em 40%'},
    before: '#soil {\n  display: grid;\n',
    after: '  grid-template-rows: 20% 20% 20% 20% 20%;\n}'
  },
  {
    name: 'grid-template-columns 5',
    instructions: '<p>Grid also introduces a new unit, the fractional <code>fr</code>. Each <code>fr</code> unit allocates one share of the available space. For example, if two elements are set to <code>1fr</code> and <code>3fr</code> respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.</p><p>Here, Human is placed in the left 1/6 of your first row and Plati the remaining 5/6. Create two columns with these widths using <code>fr</code> units.</p>',
    board: 'wc',
    classes: {'#characters': 'grid-template-columns-1fr-5fr'},
    style: {'grid-template-columns': '1fr 5fr'},
    before: '#air {\n  display: grid;\n',
    after: '  grid-template-rows: 20% 20% 20% 20% 20%;\n}'
  },
  {
    name: 'grid-template-columns 3',
    instructions: '<p>When columns are set with pixels, percentages, or ems, any other columns set with <code>fr</code> will divvy up the space that\'s left over.</p><p>Here the Plati form a 50 pixel column on the left, and the Humans a 50 pixel column on the right. With <code class="help">grid-template-columns</code>, create these two columns, and use <code>fr</code> to make three more columns that take up the remaining space in between.</p>',
    board: 'cw',
    classes: {
      '#characters': 'grid-template-columns-50px-1fr-1fr-1fr-50px',
      '#characters > :nth-child(1), #halos > :nth-child(1)': 'grid-area-1-1-6-2',
      '#characters > :nth-child(2), #halos > :nth-child(2)': 'grid-area-1-5-6-6'
    },
    style: {'grid-template-columns': '50px 1fr 1fr 1fr 50px'},
    before: '#air {\n  display: grid;\n',
    after: '  grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#blue-halo {\n  grid-area: 1 / 1 / 6 / 2;\n}\n\n#orange-halo {\n  grid-area: 1 / 5 / 6 / 6;\n}'
  },
  {
    name: 'grid-template-columns 6',
    instructions: '<p>Now there is a 75 pixel column of Humans on the left side of your battlefield. 3/5 of the remaining space is having Plati, while 2/5 has been overrun with Human heroes.</p><p>Use <code class="help">grid-template-columns</code> with a combination of <code>px</code> and <code>fr</code> units to make the necessary columns.</p>',
    board: 'wcw',
    classes: {'#characters': 'grid-template-columns-6', '#halos, #overlay': 'grid-template-rows-100p'},
    style: {'grid-template-columns': '75px 3fr 2fr'},
    before: '#soil {\n  display: grid;\n',
    after: '  grid-template-rows: 100%;\n}'
  },
  {
    name: 'grid-template-rows 1',
    instructions: '<p><code class="help">grid-template-rows</code> works much the same as <code class="help">grid-template-columns</code>.</p><p>Use <code class="help">grid-template-rows</code> to defend all but the top 50 pixels of your battlefield. Note that the <strong>Blue Halo</strong> is set to be placed only your 5th row, so you\'ll need to create 5 rows in total.</p>',
    board: 'c',
    classes: {
      '#characters': 'grid-template-rows-50px-0-0-0-1fr',
      '#characters > :nth-child(1), #halos > :nth-child(1)': 'grid-area-5-1-6-6'
    },
    style: {'grid-template-rows': '1fr 100px'},
    before: '#soil {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n',
    after: '}\n\n#blue-halo {\n  grid-column: 1 / 6;\n  grid-row: 5 / 6;\n}'
  },
  {
    name: 'grid-template 1',
    instructions: '<p><code class="help">grid-template</code> is a shorthand property that combines <code class="help">grid-template-rows</code> and <code class="help">grid-template-columns</code>.</p><p>For example, <code>grid-template: 50% 50% / 200px;</code> will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.</p><p>Try using <code class="help">grid-template</code> to protect an area that includes the top 60% and left 200 pixels of your battlefield.</p>',
    board: 'c',
    style: {'grid-template': '60% 1fr / 200px 1fr'},
    before: '#soil {\n  display: grid;\n',
    after: '}\n\n#blue-halo {\n  grid-column: 1;\n  grid-row: 1;\n}'
  },
  {
    name: 'grid-template 2',
    instructions: '<p>Your heroes are looking great! They will estabilish an agreement and live in peace together. Here you\'ve left a 50 pixel path at the bottom of your battlefield and filled the rest with Plati and Humans.</p><p>Unfortunately, the left 20% of your Human characters need to be protected. Use CSS grid one last time to defend your heroes, by placing the <strong>Orange Halo</strong> over the Humans and <strong>Blue Halo</strong> on Plati.</p>',
    board: 'wc',
    classes: {'#characters': 'grid-template-2'},
    style: {'grid-template': '1fr 50px / 20% 1fr'},
    before: '#halos {\n  display: grid;\n',
    after: '}'
  }
]

export const levelWin = {
  name: 'win',
  instructions: '<p><strong>Congratulations!</strong> By the power of CSS grid, you were able to save both species, Humans and Plati, and make them leave together in peace on their planet.</p><p>If you enjoyed this game, please stay aware. New games are coming! Together we will learn CSS layout and HTML concepts.</p><p>Hope to see you soon!</p>',
  board: '',
  classes: {'#halos, #characters, #overlay': 'win'},
  style: {},
  before: '#pond {\n  display: flex;\n',
  after: '}'
}

export const warningReset = 'Are you sure you want to reset the game?\n\nYour saved progress will be lost and you\'ll be sent to the start of the game.'

export const wrongAnswerWarning = 'Ooops ! Wrong answer! Try again!'

export const completeAllLevelsWarning = 'Complete all levels for the big prize!'

export const airLevels = [0,1,2,7,8,10,14,17,18,22,23]

export const soilLevels = [3,4,5,6,9,11,12,13,15,16,19,20,21,24]

export const PlatiLevels = [0,2,3,4,6,7,8,9,10,11,12,14,15,16,17,19,20,21,25,26]

export const HumansLevels = [1,5,13,18,22,23,24,27,28]