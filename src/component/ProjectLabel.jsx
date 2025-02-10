import PropTypes from 'prop-types';

const ProjectLabel = ({ type }) => {
    // 🎨 type별 텍스트 색상 및 배경 클래스 매핑
    const labelStyles = {
        HTML: { bgClass: 'bgc-labelbg-html', textClass: 'txt-labeltxt-html' },
        CSS: { bgClass: 'bgc-labelbg-css', textClass: 'txt-labeltxt-css' },
        REACT: { bgClass: 'bgc-labelbg-react', textClass: 'txt-labeltxt-react' },
        FIGMA: { bgClass: 'bgc-labelbg-figma', textClass: 'txt-labeltxt-figma' },
        SCSS: { bgClass: 'bgc-labelbg-scss', textClass: 'txt-labeltxt-scss' },
        TYPESCRIPT: { bgClass: 'bgc-labelbg-type', textClass: 'txt-labeltxt-type' },
        JAVASCRIPT: { bgClass: 'bgc-labelbg-java', textClass: 'txt-labeltxt-jsva' },
    };

    // 매칭되는 스타일 가져오기 (없으면 기본값 '')
    const { bgClass = '', textClass = '' } = labelStyles[type] || {};

    return (
        <div className={`label ${bgClass}`}>
            <p className={textClass}>{type || 'Unknown'}</p>
        </div>
    );
};

// 🔍 type은 반드시 문자열이어야 함
ProjectLabel.propTypes = {
    type: PropTypes.string.isRequired,
};

export default ProjectLabel;
