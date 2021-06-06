import * as S from './styles'

export const Loading = () => {
  return (
    <S.Container>
      <svg
        width="105"
        height="36"
        viewBox="0 0 105 36"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M98.633 16.285C99.3099 16.434 99.9932 16.6438 100.683 16.9172C101.371 17.1905 101.994 17.5507 102.551 17.9963C103.107 18.4433 103.554 18.9886 103.892 19.6338C104.231 20.2802 104.4 21.0485 104.4 21.941C104.4 23.1083 104.171 24.0941 103.712 24.9012C103.251 25.707 102.653 26.3586 101.916 26.8548C101.178 27.3509 100.35 27.7111 99.4311 27.9339C98.5119 28.158 97.5926 28.2681 96.6746 28.2681C95.1984 28.2681 93.3638 27.9572 92.0526 27.2356C90.6189 26.4467 90.1058 25.9933 89.6094 25.4142C89.3799 25.146 89.318 24.7768 89.5578 24.5177L91.3035 22.0434C91.533 21.7946 91.9224 21.555 92.1995 21.7493C92.8184 22.1846 93.5546 22.7248 94.1322 23.0202C95.3144 23.6264 96.8048 23.8752 98.031 23.2611C98.5028 23.0266 98.7285 22.5629 98.7027 22.1898C98.6653 21.6211 98.4152 21.2842 97.835 21.0109C97.2548 20.7388 96.3484 20.4525 95.1146 20.1546C94.4854 20.0069 93.8563 19.8087 93.2284 19.56C92.5992 19.3112 92.0371 18.977 91.542 18.5547C91.0456 18.1336 90.6408 17.6116 90.3262 16.991C90.0116 16.3718 89.8543 15.6269 89.8543 14.7589C89.8543 13.6422 90.0838 12.6926 90.5441 11.9115C91.0031 11.129 91.5962 10.4916 92.322 9.99417C93.0466 9.498 93.8511 9.13268 94.733 8.8969C95.6161 8.66113 96.4928 8.54324 97.3631 8.54324C98.7181 8.54324 99.8914 8.72849 101.168 9.26482C102.257 9.72212 102.794 10.0214 103.588 10.6704C103.866 10.8984 103.892 11.3181 103.644 11.5811L101.836 14.0283C101.605 14.3275 101.249 14.3081 100.969 14.1475C100.51 13.8858 100.211 13.7096 99.7986 13.4945C99.377 13.2743 98.9257 13.1085 98.459 13.0204C97.5539 12.8494 96.743 12.8753 96.0339 13.2108C95.562 13.4349 95.3325 13.878 95.3325 14.4234C95.3325 14.9442 95.5916 15.3173 96.1125 15.5401C96.6321 15.7629 97.4727 16.0117 98.633 16.285ZM81.5604 30.4653C81.0576 31.7335 80.6089 32.4668 80.1164 33.1948C78.3901 35.7508 75.1566 36.3687 72.5716 35.8104C71.3596 35.4567 70.3888 35.0461 69.8911 34.4657C69.6617 34.1988 69.6011 33.8296 69.8396 33.5705L71.3648 30.8345C71.5943 30.5857 71.9836 30.3448 72.2596 30.5391C72.5393 30.736 73.1827 31.0301 73.6636 31.0301C74.3856 30.9886 75.2507 30.9537 76.1197 28.9496C76.4923 27.9689 76.4794 27.3108 75.9301 25.8676L69.3638 9.99417C69.1949 9.58739 69.4928 9.13786 69.9311 9.13786H75.1707C75.4338 9.13786 75.6684 9.30627 75.7535 9.55759L79.6368 21.0485H79.7464L83.2055 9.57703C83.2842 9.31664 83.5227 9.13786 83.7934 9.13786H88.3743C88.8049 9.13786 89.1014 9.57185 88.948 9.97733L81.5604 30.4653ZM65.3787 26.8548C64.6412 27.3509 63.8122 27.7111 62.8942 27.9339C61.975 28.158 61.0557 28.2681 60.1365 28.2681C58.6615 28.2681 56.8269 27.9572 55.5157 27.2356C54.0807 26.4467 53.5689 25.9933 53.0725 25.4142C52.843 25.146 52.7811 24.7768 53.0196 24.5177L54.7666 22.0434C54.9961 21.7946 55.3855 21.555 55.6614 21.7493C56.2815 22.1846 57.0177 22.7248 57.594 23.0202C58.7776 23.6264 60.2667 23.8752 61.4941 23.2611C61.9659 23.0266 62.1916 22.5629 62.1658 22.1898C62.1284 21.6211 61.8783 21.2842 61.2981 21.0109C60.7179 20.7388 59.8103 20.4525 58.5777 20.1546C57.9486 20.0069 57.3194 19.8087 56.6915 19.56C56.0623 19.3112 55.5002 18.977 55.0051 18.5547C54.5088 18.1336 54.1039 17.6116 53.7893 16.991C53.4748 16.3718 53.3175 15.6269 53.3175 14.7589C53.3175 13.6422 53.547 12.6926 54.0072 11.9115C54.4662 11.129 55.0593 10.4916 55.7851 9.99417C56.5097 9.498 57.3129 9.13268 58.1961 8.8969C59.0793 8.66113 59.956 8.54324 60.8262 8.54324C62.18 8.54324 63.3545 8.72849 64.6309 9.26482C65.7203 9.72212 66.2567 10.0214 67.0509 10.6704C67.3281 10.8984 67.3551 11.3181 67.1076 11.5811L65.2987 14.0283C65.0667 14.3275 64.7121 14.3081 64.4323 14.1475C63.9734 13.8858 63.673 13.7096 63.2617 13.4945C62.8401 13.2743 62.3888 13.1085 61.9221 13.0204C61.017 12.8494 60.2061 12.8753 59.497 13.2108C59.0251 13.4349 58.7956 13.878 58.7956 14.4234C58.7956 14.9442 59.0548 15.3173 59.5743 15.5401C60.0952 15.7629 60.9358 16.0117 62.0962 16.285C62.773 16.434 63.4564 16.6438 64.1448 16.9172C64.8346 17.1905 65.4573 17.5507 66.0143 17.9963C66.57 18.4433 67.0161 18.9886 67.3551 19.6338C67.6942 20.2802 67.8631 21.0485 67.8631 21.941C67.8631 23.1083 67.6336 24.0941 67.1746 24.9012C66.7144 25.707 66.1161 26.3586 65.3787 26.8548ZM49.1479 27.6735H44.9359C44.5955 27.6735 44.3209 27.3963 44.3209 27.0556V25.7005H44.2126C43.7523 26.47 43.0574 27.0659 42.1265 27.487C41.1957 27.9093 40.1862 28.1204 39.098 28.1204C38.3721 28.1204 37.6218 28.0207 36.8482 27.8225C36.0746 27.6243 35.3668 27.3017 34.7261 26.8548C34.0853 26.4078 33.5593 25.8119 33.148 25.0683C32.7367 24.3234 32.5317 23.4062 32.5317 22.3141C32.5317 20.9746 32.8888 19.8942 33.6018 19.0754C34.3148 18.2567 35.234 17.6245 36.3596 17.1776C37.4838 16.7319 38.7344 16.434 40.1127 16.285C41.4909 16.136 42.833 16.0609 44.1391 16.0609V15.7629C44.1391 14.8457 43.8245 14.1695 43.1966 13.7342C42.5675 13.3015 41.7939 13.0839 40.8746 13.0839C40.0276 13.0839 39.2115 13.2691 38.4263 13.6422C37.8345 13.922 37.0132 14.3923 36.5517 14.7576C36.299 14.9571 35.938 14.9286 35.7214 14.689L33.9564 12.291C33.7217 12.032 33.7475 11.6291 34.0118 11.3998C34.9659 10.572 35.4893 10.0784 37.1202 9.32441C38.4895 8.69092 39.9799 8.54324 41.4548 8.54324C42.9787 8.54324 44.2667 8.73497 45.3188 9.11972C46.3708 9.50448 47.223 10.1004 47.8754 10.9062C48.5291 11.7133 49.0061 12.7302 49.3091 13.9583C49.6108 15.1864 49.7616 16.6438 49.7616 18.3318V27.0556C49.7616 27.3963 49.487 27.6735 49.1479 27.6735ZM44.3209 19.9952C44.3209 19.775 44.143 19.5962 43.9251 19.5962H43.5589C42.9065 19.5962 42.2464 19.6286 41.5824 19.6895C40.9172 19.7517 40.3241 19.8709 39.8045 20.0432C39.285 20.2181 38.8556 20.4707 38.5178 20.8062C38.1787 21.1417 38.0099 21.5822 38.0099 22.1276C38.0099 22.4761 38.0872 22.7727 38.2458 23.0215C38.4018 23.2689 38.6016 23.4684 38.844 23.6161C39.0851 23.7651 39.3636 23.8713 39.6782 23.9335C39.9915 23.9944 40.2945 24.0255 40.5845 24.0255C41.7939 24.0255 42.7183 23.6847 43.3591 23.002C43.9998 22.3206 44.3209 21.3956 44.3209 20.2297V19.9952ZM26.8937 25.5476C25.9744 26.4039 24.9108 27.0685 23.7014 27.5401C22.4921 28.0103 21.1989 28.2461 19.8194 28.2461C18.4657 28.2461 17.1777 28.0103 15.9567 27.5401C14.7358 27.0685 13.6721 26.4039 12.7645 25.5476C11.8581 24.6913 11.1387 23.6498 10.6062 22.4217C10.0737 21.1935 9.80816 19.8229 9.80816 18.3085C9.80816 16.7954 10.0737 15.4313 10.6062 14.2148C11.1387 12.9997 11.8581 11.9698 12.7645 11.1251C13.6721 10.2818 14.7358 9.63662 15.9567 9.18968C17.1777 8.74404 18.4657 8.51992 19.8194 8.51992C21.1989 8.51992 22.4921 8.74404 23.7014 9.18968C24.9108 9.63662 25.9744 10.2818 26.8937 11.1251C27.8117 11.9698 28.5375 12.9997 29.07 14.2148C29.6012 15.4313 29.8681 16.7954 29.8681 18.3085C29.8681 19.8229 29.6012 21.1935 29.07 22.4217C28.5375 23.6498 27.8117 24.6913 26.8937 25.5476ZM19.8375 13.5684C17.2228 13.5684 15.1032 15.7007 15.1032 18.3318C15.1032 20.5031 16.5575 22.3141 18.5314 22.888C18.9375 23.0202 19.3695 23.1096 19.8568 23.1096C20.4486 23.1096 20.9656 22.9917 21.4375 22.796C23.2618 22.1341 24.573 20.3942 24.573 18.3318C24.573 15.7007 22.4534 13.5684 19.8375 13.5684ZM2.88989 7.16874C1.48328 6.89928 0.333244 5.74113 0.0663636 4.32517C-0.411959 1.77697 1.76692 -0.41497 4.29907 0.0669468C5.70567 0.33511 6.857 1.49197 7.12517 2.90792C7.60865 5.45742 5.4259 7.65454 2.88989 7.16874ZM1.17901 9.13786H5.89906C6.23814 9.13786 6.51405 9.41509 6.51405 9.7571V27.0556C6.51405 27.3963 6.23814 27.6735 5.89906 27.6735H1.17901C0.839931 27.6735 0.564025 27.3963 0.564025 27.0556V9.7571C0.564025 9.41509 0.839931 9.13786 1.17901 9.13786Z"
        />
      </svg>
    </S.Container>
  )
}
