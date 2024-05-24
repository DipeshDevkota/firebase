#include <stdio.h>
#include <graphics.h>
#include <math.h>
int main() {
 int x1, y1, x2, y2, dx, dy, steps;
 int gd = DETECT, gm;
 initgraph(&gd, &gm, NULL);
 printf("Enter the initial point\n");
 scanf("%d %d", &x1, &y1);
 printf("Enter the final point\n");
 scanf("%d %d", &x2, &y2);
 dx = x2 - x1;
 dy = y2 - y1;
 if (abs(dx) >= abs(dy)) {
 steps = abs(dx);
 } else {
 steps = abs(dy);
 }
 float xIncrement = (float) dx / steps;
 float yIncrement = (float) dy / steps;
 float x = x1;
 float y = y1;
 // drawing individual pixels in loop
 for (int i = 0; i <= steps; i++) {
 putpixel(round(x), round(y), RED);
 x += xIncrement;
 y += yIncrement;
 delay(100);
 }
 getch();
 closegraph();
 return 0;
}
