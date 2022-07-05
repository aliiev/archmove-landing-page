const CloseIcon = ({ className }) => (
  <svg className={ className } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <line x1="19" y1="19" x2="5" y2="5" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></line>
    <line x1="19" y1="5" x2="5" y2="19" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></line>
  </svg>
)

export default CloseIcon