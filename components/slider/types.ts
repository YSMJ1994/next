import type {
    HTMLAttributes,
    CSSProperties,
    ReactNode,
    ReactElement,
    MouseEvent,
    MouseEventHandler,
} from 'react';
import type { CommonProps } from '../util';

interface HTMLAttributesWeak
    extends Omit<HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'> {}

export interface TrackCSSProps
    extends Omit<InnerSliderProps, 'slideCount' | 'slideWidth' | 'slideHeight'>,
        InnerSliderState {
    left: number;
}

export interface TrackLeftProps
    extends Omit<InnerSliderProps, 'slideCount' | 'slideWidth' | 'slideHeight'>,
        InnerSliderState {
    slideIndex: number;
    trackRef: HTMLDivElement;
}

export interface OptionProps {
    message?: string;
    index?: number;
    currentSlide?: number;
    slidesToScroll?: number;
}

interface BasicSlideProps {
    centerMode?: SliderProps['centerMode'];
    infinite?: SliderProps['infinite'];
    slidesToShow?: SliderProps['slidesToShow'];
    slidesToScroll?: SliderProps['slidesToScroll'];
    slideCount?: number | null;
    currentSlide?: number;
}

export interface TrackProps extends Omit<CommonProps, 'locale'>, BasicSlideProps {
    activeIndex?: SliderProps['activeIndex'];
    trackStyle?: CSSProperties;
    lazyLoad?: SliderProps['lazyLoad'];
    lazyLoadedList?: number[];
    animation?: SliderProps['animation'];
    variableWidth?: boolean;
    slideWidth?: number | null;
    slideHeight?: number | null;
    cssEase?: SliderProps['cssEase'];
    speed?: SliderProps['speed'];
    vertical?: boolean;
    children?: ReactNode;
    focusOnSelect?: ((options: OptionProps) => void) | null;
}

export interface DotsProps extends Omit<CommonProps, 'locale'>, BasicSlideProps {
    dotsClass?: string;
    dotsDirection?: SliderProps['dotsDirection'];
    triggerType?: SliderProps['triggerType'];
    dotsRender?: SliderProps['dotsRender'];
    changeSlide?: (options: OptionProps) => void;
}

export interface ArrowProps
    extends HTMLAttributesWeak,
        Omit<CommonProps, 'locale'>,
        Omit<BasicSlideProps, 'slidesToScroll'> {
    type?: 'prev' | 'next';
    arrowSize?: SliderProps['arrowSize'];
    arrowPosition?: SliderProps['arrowPosition'];
    arrowDirection?: SliderProps['arrowDirection'];
    children?: ReactElement;
    clickHandler?: (options: OptionProps, e: MouseEvent<HTMLElement>) => void;
    onMouseEnter?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

export interface InnerSliderProps
    extends Omit<
        SliderProps,
        'slideDirection' | 'style' | 'className' | 'vertical' | 'verticalSwiping'
    > {
    /**
     * 是否启用垂直轮播
     * @en Whether to use vertical carousel
     */
    vertical?: boolean;
    /**
     * 是否启用垂直滑动
     * @en Whether to use vertical sliding
     */
    verticalSwiping?: boolean;
}

export interface InnerSliderState {
    lazyLoadedList?: number[];
    slideCount?: number | null;
    currentSlide?: number;
    trackStyle?: CSSProperties;
    animating?: boolean;
    dragging?: boolean;
    autoPlayTimer?: NodeJS.Timeout | null;
    currentDirection?: number;
    currentLeft?: number | null;
    direction?: number;
    listWidth?: number | null;
    listHeight?: number | null;
    slideWidth?: number | null;
    slideHeight?: number | null;
    slideHeightList?: number[];
    swipeLeft?: number | null;
    touchObject?: {
        startX?: number;
        startY?: number;
        curX?: number;
        curY?: number;
        swipeLength?: number;
    };
    initialized?: boolean;
    edgeDragged?: boolean;
    swiped?: boolean;
    trackWidth?: number;
    children?: ReactNode;
}

/**
 * @api
 */
export interface SliderProps
    extends Omit<HTMLAttributesWeak, 'onChange' | 'draggable' | 'children'>,
        Omit<CommonProps, 'locale'> {
    /**
     * 自定义传入的样式
     * @en Custom className
     */
    className?: string;
    /**
     * 是否使用自适应高度
     * @en Whether to use adaptive height
     * @defaultValue false
     */
    adaptiveHeight?: boolean;

    /**
     * 动效类型，默认是'slide'
     * @en Animation type, default value is 'slide'
     * @defaultValue 'slide'
     */
    animation?: string | boolean;

    /**
     * 是否显示箭头
     * @en Whether to display arrows
     * @defaultValue true
     */
    arrows?: boolean;

    /**
     * 导航箭头大小
     * @en Size of the arrow
     * @defaultValue 'medium'
     */
    arrowSize?: 'medium' | 'large';

    /**
     * 导航箭头位置
     * @en Position of the arrow
     * @defaultValue 'inner'
     */
    arrowPosition?: 'inner' | 'outer';

    /**
     * 导航箭头方向
     * @en Direction of the arrow
     * @defaultValue 'hoz'
     */
    arrowDirection?: 'hoz' | 'ver';

    /**
     * 是否自动播放
     * @en Whether to play automatically
     * @defaultValue false
     */
    autoplay?: boolean;

    /**
     * 自动播放的速度
     * @en Autoplay speed
     * @defaultValue 3000
     */
    autoplaySpeed?: number;

    /**
     * 前向箭头节点
     * @en Prev arrow
     */
    prevArrow?: ReactElement;

    /**
     * 后向箭头节点
     * @en Next arrow
     */
    nextArrow?: ReactElement;

    /**
     * 是否启用居中模式
     * @en Whether to use center mode
     * @defaultValue false
     */
    centerMode?: boolean;

    /**
     * 是否显示导航锚点
     * @en Whether to display dots
     * @defaultValue true
     */
    dots?: boolean;

    /**
     * 导航锚点方向
     * @en Direction for navigation dots
     * @defaultValue 'hoz'
     */
    dotsDirection?: 'hoz' | 'ver';

    /**
     * 自定义导航锚点
     * @en Render navigation dots
     * @param index - 锚点编号
     * @param current - 当前幻灯片编号
     */
    dotsRender?: (index: number, current: number) => void;

    /**
     * 是否可拖拽
     * @en Whether it can be dragged
     * @defaultValue true
     */
    draggable?: boolean;

    /**
     * 是否使用无穷循环模式
     * @en Whether to use infinite loop mode
     * @defaultValue true
     */
    infinite?: boolean;

    /**
     * 初始被激活的轮播图
     * @en The default activated slide index
     * @defaultValue 0
     */
    defaultActiveIndex?: number;

    /**
     * 是否启用懒加载
     * @en Whether to enable lazy load
     * @defaultValue false
     */
    lazyLoad?: boolean;

    /**
     * 轮播方向
     * @en Slide direction
     * @defaultValue 'hoz'
     */
    slideDirection?: 'hoz' | 'ver';

    /**
     * 同时展示的图片数量
     * @en Number of slides showed at the same time
     * @defaultValue 1
     */
    slidesToShow?: number;

    /**
     * 同时滑动的图片数量
     * @en Number of slides scrolled at the same time
     * @defaultValue 1
     */
    slidesToScroll?: number;

    /**
     * 轮播速度
     * @en Carousel speed
     * @defaultValue 600
     */
    speed?: number;

    /**
     * 跳转到指定的轮播图（受控）
     * @en Jump to the specified carousel image (controlled)
     */
    activeIndex?: number;

    /**
     * 导航锚点触发方式
     * @en Triggering method for navigation dots
     * @defaultValue 'click'
     */
    triggerType?: 'click' | 'hover';

    /**
     * 轮播切换的回调函数
     * @en Callback function for slides switching
     */
    onChange?: (index: number) => void;

    /**
     * center 模式下的边缘 padding 值 (px or %);
     * @en Side padding when in center mode (px or %);
     * @defaultValue '50px'
     */
    centerPadding?: string;

    /**
     * CSS3 Animation Easing，默认‘ease’
     * @en CSS3 Animation Easing, default value is 'ease'
     * @defaultValue 'ease'
     */
    cssEase?: string;

    /**
     * 多图轮播时，是否在点击选中后自动居中
     * @en When multiple slides are rotated, whether to be automatically centered after clicking to select them.
     * @defaultValue 'false'
     */
    focusOnSelect?: boolean;

    /**
     * 自定义样式
     * @en Custom style
     */
    style?: CSSProperties;

    /**
     * 是否等待动画结束后再执行动作
     * @en Whether to wait for the animation to end before executing the action
     * @defaultValue true
     */
    waitForAnimate?: boolean;

    /**
     * @deprecated use arrowPosition instead
     * @skip
     */
    arrowPos?: SliderProps['arrowPosition'] | 'inline';

    /**
     * @deprecated use defaultActiveIndex instead
     * @skip
     */
    initialSlide?: number;

    /**
     * @deprecated use activeIndex instead
     * @skip
     */
    slickGoTo?: number;

    /**
     * @deprecated use onChange instead
     * @skip
     */
    afterChange?: (index: number) => void;

    /**
     * @deprecated use onBeforeChange instead
     * @skip
     */
    beforeChange?: (index: number) => void;
    /**
     * 是否启用无障碍支持，使用左右键可以切换轮播图
     * @en Whether to enable accessibility support, using the left and right keys to switch the carousel image
     * @defaultValue false
     */
    accessibility?: boolean;
    /**
     * 子元素
     * @en Children
     */
    children?: ReactNode;
    /**
     * 导航锚点样式类名
     * @en Dots class name
     */
    dotsClass?: string;
    /**
     * Slider 在默认情况下会认为所有的子元素是等宽的。通过设置 `variableWidth` 为 `true`，您可以在 Slider 中放置不同宽度的图片。
     * @en By default, Slider considers all child elements to be equal. By setting `variableWidth` to `true`, you can place images of different widths in the Slider.
     */
    variableWidth?: boolean;
    /**
     * 是否启用垂直轮播
     * @en Whether to use vertical carousel
     * @deprecated use slideDirection=ver instead
     * @skip
     */
    vertical?: boolean;
    /**
     * 是否启用垂直滑动
     * @en Whether to use vertical sliding
     * @deprecated use slideDirection=ver instead
     * @skip
     */
    verticalSwiping?: boolean;
    /**
     * 轮播切换前的回调函数
     * @en Callback function before slides switching
     */
    onBeforeChange?: (index: number, currentIndex?: number) => void;
    /**
     * 是否启用滑动
     * @en Whether to use swipe
     * @defaultValue true
     */
    swipe?: boolean;
    /**
     * 在滑动到头时触发的回调函数
     * @en Callback function triggered when sliding to the edge
     */
    edgeEvent?: (swipeDirection: 'left' | 'right') => void;
    /**
     * 边缘摩擦系数，数值越大，滑动越慢
     * @en Edge friction coefficient, the larger the number, the slower the sliding
     * @defaultValue 0.35
     */
    edgeFriction?: number;
    /**
     * 滑动事件回调函数
     * @en Callback function for swipe events
     */
    swipeEvent?: (swipeDirection: 'left' | 'right' | 'vertical' | 'down' | 'up') => void;
    /**
     * @skip
     */
    touchThreshold?: number;
    /**
     * @skip
     */
    swipeToSlide?: boolean;
    /**
     * 在鼠标悬浮时自动停止轮播
     * @en Whether to stop the carousel automatically when the mouse hovers
     * @defaultValue false
     */
    pauseOnHover?: boolean;
    /**
     * @skip
     */
    useCSS?: boolean;
}
