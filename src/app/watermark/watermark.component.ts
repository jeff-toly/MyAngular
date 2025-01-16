import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-watermark',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.css']
})
export class WatermarkComponent implements AfterViewInit {

  @ViewChild('watermark') watermark!: ElementRef;

  ngAfterViewInit(): void {
    setInterval(drawCanvas, 1000);
    const canvasElement = this.watermark.nativeElement;
    const context = canvasElement.getContext('2d');

    function drawCanvas() {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
      const mw = 300, mh = 300;
      const m = canvasElement.width / mw, n = canvasElement.height / mh;
      // 设置水印文本和样式
      context.font = `24px Arial`;
      context.fillStyle = 'rgba(0, 0, 0, 0.1)';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      const text = `AIA F3234352,${new Date().toLocaleString()}`;
      const arr = text.split(',');
      for (let x = 0; x < m; ++x) {
        for (let y = 0; y < n; ++y) {
          for (let i = 0; i < 2; ++i) {
            // 保存当前上下文状态
            context.save();
            // 文本旋转的中心点坐标
            const centerX = mw * x;
            const centerY = mh * y + 30 * i;
            // 将上下文原点移动到旋转中心
            context.translate(centerX, centerY);
            // 旋转上下文（角度以弧度为单位，正值为顺时针）
            const angle = -Math.PI / 6; // 旋转30度
            context.rotate(angle);
            // 绘制旋转后的文本
            context.fillText(arr[i], 0, 0);
            // 恢复上下文状态到旋转之前
            context.restore();
          }
        }
      }
    }
  }
}
