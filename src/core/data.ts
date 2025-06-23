/*
 * WeChat emoji data interface
 */
export interface WechatEmoji {
  name: string
  code: string
  position: [number, number] /* [row, col] position in sprite sheet (1-indexed) */
}

/*
 * Sprite sheet configuration
 */
export const size = 32 /* single emoji size, width and height are the same */
export const totalRows = 12 /* total rows */
export const totalCols = 9 /* total columns */

/*
 * Complete WeChat emoji list (based on existing project data)
 */
export const wechatEmojiList: WechatEmoji[] = [
  { name: '微笑', code: '[微笑]', position: [1, 1] },
  { name: '撇嘴', code: '[撇嘴]', position: [1, 2] },
  { name: '色', code: '[色]', position: [1, 3] },
  { name: '发呆', code: '[发呆]', position: [1, 4] },
  { name: '得意', code: '[得意]', position: [1, 5] },
  { name: '流泪', code: '[流泪]', position: [1, 6] },
  { name: '害羞', code: '[害羞]', position: [1, 7] },
  { name: '闭嘴', code: '[闭嘴]', position: [1, 8] },
  { name: '睡', code: '[睡]', position: [1, 9] },
  { name: '大哭', code: '[大哭]', position: [2, 1] },
  { name: '尴尬', code: '[尴尬]', position: [2, 2] },
  { name: '发怒', code: '[发怒]', position: [2, 3] },
  { name: '调皮', code: '[调皮]', position: [2, 4] },
  { name: '呲牙', code: '[呲牙]', position: [2, 5] },
  { name: '惊讶', code: '[惊讶]', position: [2, 6] },
  { name: '难过', code: '[难过]', position: [2, 7] },
  { name: '冷汗', code: '[冷汗]', position: [2, 8] },
  { name: '抓狂', code: '[抓狂]', position: [2, 9] },
  { name: '吐', code: '[吐]', position: [3, 1] },
  { name: '偷笑', code: '[偷笑]', position: [3, 2] },
  { name: '愉快', code: '[愉快]', position: [3, 3] },
  { name: '白眼', code: '[白眼]', position: [3, 4] },
  { name: '傲慢', code: '[傲慢]', position: [3, 5] },
  { name: '困', code: '[困]', position: [3, 6] },
  { name: '惊恐', code: '[惊恐]', position: [3, 7] },
  { name: '憨笑', code: '[憨笑]', position: [3, 8] },
  { name: '悠闲', code: '[悠闲]', position: [3, 9] },
  { name: '咒骂', code: '[咒骂]', position: [4, 1] },
  { name: '疑问', code: '[疑问]', position: [4, 2] },
  { name: '嘘', code: '[嘘]', position: [4, 3] },
  { name: '晕', code: '[晕]', position: [4, 4] },
  { name: '衰', code: '[衰]', position: [4, 5] },
  { name: '骷髅', code: '[骷髅]', position: [4, 6] },
  { name: '敲打', code: '[敲打]', position: [4, 7] },
  { name: '再见', code: '[再见]', position: [4, 8] },
  { name: '擦汗', code: '[擦汗]', position: [4, 9] },
  { name: '抠鼻', code: '[抠鼻]', position: [5, 1] },
  { name: '鼓掌', code: '[鼓掌]', position: [5, 2] },
  { name: '坏笑', code: '[坏笑]', position: [5, 3] },
  { name: '右哼哼', code: '[右哼哼]', position: [5, 4] },
  { name: '鄙视', code: '[鄙视]', position: [5, 5] },
  { name: '快哭了', code: '[快哭了]', position: [5, 6] },
  { name: '委屈', code: '[委屈]', position: [5, 7] },
  { name: '阴险', code: '[阴险]', position: [5, 8] },
  { name: '亲亲', code: '[亲亲]', position: [5, 9] },
  { name: '可怜', code: '[可怜]', position: [6, 1] },
  { name: '笑脸', code: '[笑脸]', position: [6, 2] },
  { name: '生病', code: '[生病]', position: [6, 3] },
  { name: '脸红', code: '[脸红]', position: [6, 4] },
  { name: '破涕为笑', code: '[破涕为笑]', position: [6, 5] },
  { name: '恐惧', code: '[恐惧]', position: [6, 6] },
  { name: '失望', code: '[失望]', position: [6, 7] },
  { name: '无语', code: '[无语]', position: [6, 8] },
  { name: '嘿哈', code: '[嘿哈]', position: [6, 9] },
  { name: '捂脸', code: '[捂脸]', position: [7, 1] },
  { name: '奸笑', code: '[奸笑]', position: [7, 2] },
  { name: '机智', code: '[机智]', position: [7, 3] },
  { name: '皱眉', code: '[皱眉]', position: [7, 4] },
  { name: '耶', code: '[耶]', position: [7, 5] },
  { name: '吃瓜', code: '[吃瓜]', position: [7, 6] },
  { name: '加油', code: '[加油]', position: [7, 7] },
  { name: '汗', code: '[汗]', position: [7, 8] },
  { name: '天啊', code: '[天啊]', position: [7, 9] },
  { name: 'Emm', code: '[Emm]', position: [8, 1] },
  { name: '社会社会', code: '[社会社会]', position: [8, 2] },
  { name: '旺柴', code: '[旺柴]', position: [8, 3] },
  { name: '好的', code: '[好的]', position: [8, 4] },
  { name: '打脸', code: '[打脸]', position: [8, 5] },
  { name: '哇', code: '[哇]', position: [8, 6] },
  { name: '翻白眼', code: '[翻白眼]', position: [8, 7] },
  { name: '666', code: '[666]', position: [8, 8] },
  { name: '让我看看', code: '[让我看看]', position: [8, 9] },
  { name: '叹气', code: '[叹气]', position: [9, 1] },
  { name: '苦涩', code: '[苦涩]', position: [9, 2] },
  { name: '裂开', code: '[裂开]', position: [9, 3] },
  { name: '嘴唇', code: '[嘴唇]', position: [9, 4] },
  { name: '爱心', code: '[爱心]', position: [9, 5] },
  { name: '心碎', code: '[心碎]', position: [9, 6] },
  { name: '拥抱', code: '[拥抱]', position: [9, 7] },
  { name: '强', code: '[强]', position: [9, 8] },
  { name: '弱', code: '[弱]', position: [9, 9] },
  { name: '握手', code: '[握手]', position: [10, 1] },
  { name: '胜利', code: '[胜利]', position: [10, 2] },
  { name: '抱拳', code: '[抱拳]', position: [10, 3] },
  { name: '勾引', code: '[勾引]', position: [10, 4] },
  { name: '拳头', code: '[拳头]', position: [10, 5] },
  { name: 'OK', code: '[OK]', position: [10, 6] },
  { name: '合十', code: '[合十]', position: [10, 7] },
  { name: '啤酒', code: '[啤酒]', position: [10, 8] },
  { name: '咖啡', code: '[咖啡]', position: [10, 9] },
  { name: '蛋糕', code: '[蛋糕]', position: [11, 1] },
  { name: '玫瑰', code: '[玫瑰]', position: [11, 2] },
  { name: '凋谢', code: '[凋谢]', position: [11, 3] },
  { name: '菜刀', code: '[菜刀]', position: [11, 4] },
  { name: '炸弹', code: '[炸弹]', position: [11, 5] },
  { name: '便便', code: '[便便]', position: [11, 6] },
  { name: '月亮', code: '[月亮]', position: [11, 7] },
  { name: '太阳', code: '[太阳]', position: [11, 8] },
  { name: '庆祝', code: '[庆祝]', position: [11, 9] },
  { name: '礼物', code: '[礼物]', position: [12, 1] },
  { name: '红包', code: '[红包]', position: [12, 2] },
  { name: '福', code: '[福]', position: [12, 3] },
  { name: '烟花', code: '[烟花]', position: [12, 4] },
  { name: '爆竹', code: '[爆竹]', position: [12, 5] },
  { name: '猪头', code: '[猪头]', position: [12, 6] },
  { name: '跳跳', code: '[跳跳]', position: [12, 7] },
  { name: '发抖', code: '[发抖]', position: [12, 8] },
  { name: '转圈', code: '[转圈]', position: [12, 9] }
]

/*
 * Create a quick lookup Map for emoji codes
 */
export const emojiMap = new Map<string, WechatEmoji>()
wechatEmojiList.forEach(emoji => {
  emojiMap.set(emoji.code, emoji)
})

/*
 * Export emoji codes list
 */
export const emojiCodes = wechatEmojiList.map(emoji => emoji.code)

/**
 * Calculate background position for sprite sheet based on row and column position
 * @param position [row, col] row and column position (1-indexed)
 * @param emojiSize single emoji display size
 * @param bgScale background image scale multiplier
 * @returns CSS background-position value
 */
export function calculateBackgroundPosition(
  position: [number, number], 
  emojiSize = 24, 
  bgScale = 1.3
): string {
  const [row, col] = position
  /*
   * Convert to 0-indexed
   */
  const rowIndex = row - 1
  const colIndex = col - 1
  
  /*
   * Calculate background size and offset
   */
  const bgSize = size * bgScale
  const offset = (bgSize - emojiSize) / 2
  
  /*
   * Calculate position
   */
  const x = -(colIndex * bgSize + offset)
  const y = -(rowIndex * bgSize + offset)
  
  return `${x}px ${y}px`
}

/**
 * Calculate complete background style for sprite sheet
 * @param position [row, col] row and column position
 * @param emojiSize single emoji display size
 * @param bgScale background image scale multiplier
 * @returns CSS background style object
 */
export function calculateBackgroundStyle(
  position: [number, number], 
  emojiSize = 24, 
  bgScale = 1.3
) {
  const bgSize = size * bgScale
  const backgroundPosition = calculateBackgroundPosition(position, emojiSize, bgScale)
  const backgroundSize = `${bgSize * totalCols}px ${bgSize * totalRows}px`
  
  return {
    backgroundPosition,
    backgroundSize,
    width: `${emojiSize}px`,
    height: `${emojiSize}px`,
    display: 'inline-block',
    verticalAlign: 'middle'
  }
}

